import { useState, useMemo, useRef, useEffect } from "react";
import Toggle from "react-toggle";
import * as THREE from "three";
import ForceGraph3D, {
  ForceGraphMethods,
  LinkObject,
  NodeObject,
} from "react-force-graph-3d";

import { useElementSize } from "usehooks-ts";

import * as s from "../data/species";
import { Page } from "../components/Page";
import "./SpeciesPage.css";
import { getLinkColorBy } from "./GoodsPageUtil";

interface Species {
  specialization: string;
  resolve: string;
  needs: string[];
  services: string[];
}
export interface SpeciesNode extends NodeObject {
  group?: number;
  id?: string | number;
  name?: string;
}

export interface Link extends Omit<LinkObject, "source"> {
  source?: string | number;
  group?: number;
  amount?: number;
}

const getNodesForSpecies = (species: Record<string, Species>) => {
  const speciesNodes: SpeciesNode[] = [];
  const speciesLinks: Link[] = [];

  const needsSet = new Set<string>();
  const servicesSet = new Set<string>();

  Object.entries(species).forEach(([species, { needs, services }]) => {
    speciesNodes.push({ id: species, group: 0 });

    needs.forEach((need) => {
      needsSet.add(need);
      speciesLinks.push({
        source: species,
        target: need,
        group: 1,
      });
    });
    services.forEach((service) => {
      servicesSet.add(service);
      speciesLinks.push({
        source: species,
        target: service,
        group: 2,
      });
    });
  });

  needsSet.forEach((need) => {
    speciesNodes.push({ id: need, name: need, group: 1 });
  });

  servicesSet.forEach((service) => {
    speciesNodes.push({ id: service, name: service, group: 2 });
  });

  return { nodes: speciesNodes, links: speciesLinks };
};

const Species = ({ type }: { type: string }) => (
  <img src={`img/species/${type}.png`} alt={type} />
);

const SpeciesPage = () => {
  const graphRef = useRef<ForceGraphMethods>();

  const [containerRef, { width, height }] = useElementSize();

  const [showFood, setFood] = useState(true);
  const [showServices, setServices] = useState(true);
  const [speciesSet, updateSpecies] = useState(new Set(Object.keys(s)));

  const toggleSpecies = (type: string) => {
    if (speciesSet.has(type)) {
      speciesSet.delete(type);
    } else {
      speciesSet.add(type);
    }

    updateSpecies(new Set([...speciesSet]));
  };

  const data = useMemo(() => {
    const species = { ...s };
    return getNodesForSpecies(species);
  }, []);

  const renderSpeciesObject = ({ id, group }: SpeciesNode) => {
    const imgTexture = new THREE.TextureLoader().load(
      group === 0
        ? `./img/species/${id}.png`
        : group === 1
        ? `./img/goods/${id}.webp`
        : `./img/services/${id}.png`
    );
    const material = new THREE.SpriteMaterial({ map: imgTexture });
    const sprite = new THREE.Sprite(material);

    const scale = group === -1 ? 24 : 12;
    sprite.scale.set(scale, scale, 1);

    return sprite;
  };

  // Need to reset the whole graph in order to recalculate node/link visibility
  const key = useMemo(
    () => String([...speciesSet.values(), showFood, showServices]),
    [speciesSet, showFood, showServices]
  );

  const visibleNeeds = useMemo(() => {
    const serviceSet = new Set<string>();

    speciesSet.forEach((species) => {
      const speciesObject: { [_s: string]: Species } = { ...s };
      speciesObject[species].services.forEach((s) => serviceSet.add(s));
      speciesObject[species].needs.forEach((n) => serviceSet.add(n));
    });

    return serviceSet;
  }, [speciesSet]);

  return (
    <Page className="species-page" isFullHeight>
      <div className="species-toggles">
        {Object.keys(s).map((species) => (
          <label key={species}>
            <Toggle
              checked={speciesSet.has(species)}
              onChange={() => toggleSpecies(species)}
            />
            <Species type={species} />
          </label>
        ))}

        <label>
          <Toggle checked={showFood} onChange={() => setFood(!showFood)} />
          Needs
        </label>

        <label>
          <Toggle
            checked={showServices}
            onChange={() => setServices(!showServices)}
          />
          Services
        </label>
      </div>

      <div className="species-graph" ref={containerRef}>
        {data ? (
          <ForceGraph3D
            key={key}
            graphData={data}
            ref={graphRef}
            width={width}
            height={height}
            nodeVisibility={(node: SpeciesNode) => {
              return (
                (node.group === 0 && speciesSet.has(String(node.id))) ||
                (node.group === 1 &&
                  showFood &&
                  visibleNeeds.has(String(node.id))) ||
                (node.group === 2 &&
                  showServices &&
                  visibleNeeds.has(String(node.id)))
              );
            }}
            nodeThreeObject={renderSpeciesObject}
            linkColor="rgba(200, 0, 0, 1)"
            linkCurvature={0.3}
            linkAutoColorBy={getLinkColorBy}
            linkOpacity={0.5}
            linkVisibility={(link: any) => {
              if (
                !visibleNeeds.has(link.target.id) ||
                !speciesSet.has(link.source.id)
              )
                return false;

              return (
                (link.group === 1 && showFood) ||
                (link.group === 2 && showServices)
              );
            }}
            numDimensions={3} // 3D graph
            cooldownTicks={100}
            onEngineStop={() => graphRef?.current?.zoomToFit(400, 1)}
          />
        ) : (
          <p>No species!</p>
        )}
      </div>
    </Page>
  );
};

export default SpeciesPage;
