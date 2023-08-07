import { useMemo, useRef } from "react";
import classnames from "classnames";
import { useLocalStorage, useElementSize, useToggle } from "usehooks-ts";
import { Toggle } from "../components/Toggle";
import * as THREE from "three";
import ForceGraph3D from "react-force-graph-3d";
import type {
  ForceGraphMethods,
  LinkObject,
  NodeObject,
} from "react-force-graph-3d";

import * as s from "../data/species";
import { Page } from "../components/Page";
import "./SpeciesPage.css";
import { Fullscreen } from "../components/Fullscreen";

interface Species {
  id: string;
  specialization: string;
  resolve: string;
  needs: string[];
  services: string[];
  color: string;
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
  color: string;
}

const GROUP_SPECIES = 0;
const GROUP_NEEDS = 1;
const GROUP_SERVICES = 2;

const speciesData = Object.values({ ...s });

const Species = ({ species: { id, color } }: { species: Species }) => (
  <img
    src={`img/species/${id}.png`}
    alt={id}
    title={id}
    style={{ border: `2px solid ${color}` }}
  />
);

const speciesDefault: string[] = speciesData.map((s) => s.id);

const SpeciesPage = (): JSX.Element => {
  const graphRef = useRef<ForceGraphMethods>();
  const [containerRef, { width, height }] = useElementSize();

  const [speciesIds, setSpecies] = useLocalStorage("species", speciesDefault);
  const [showNeeds, setNeeds] = useLocalStorage("showNeeds", true);
  const [showServices, setServices] = useLocalStorage("showServices", true);

  const [fullScreen, toggleFullscreen] = useToggle();

  const speciesSet = useMemo(() => new Set(speciesIds), [speciesIds]);

  const toggleSpecies = (type: string) => {
    setSpecies((species) => {
      if (species.includes(type)) {
        return species.filter((s) => s !== type);
      } else {
        return Array.from(new Set([...species, type]));
      }
    });
  };

  const renderSpeciesObject = ({ id, group }: SpeciesNode) => {
    const imgTexture = new THREE.TextureLoader().load(
      group === GROUP_SPECIES
        ? `./img/species/${id}.png`
        : group === GROUP_NEEDS
        ? `./img/goods/${id}.webp`
        : `./img/services/${id}.png`
    );
    const material = new THREE.SpriteMaterial({ map: imgTexture });
    const sprite = new THREE.Sprite(material);

    const scale = group === -1 ? 24 : 12;
    sprite.scale.set(scale, scale, 1);

    return sprite;
  };

  const data = useMemo(() => {
    const nodes: SpeciesNode[] = [];
    const links: Link[] = [];

    const needsSet = new Set<string>();
    const servicesSet = new Set<string>();

    speciesData
      .filter((s) => speciesSet.has(s.id))
      .forEach(({ id, needs, services, color }) => {
        nodes.push({ id, group: GROUP_SPECIES });

        if (showNeeds) {
          needs.forEach((need) => {
            needsSet.add(need);
            links.push({
              source: id,
              target: need,
              group: GROUP_NEEDS,
              color,
            });
          });
        }

        if (showServices) {
          services.forEach((service) => {
            servicesSet.add(service);
            links.push({
              source: id,
              target: service,
              group: GROUP_SERVICES,
              color,
            });
          });
        }
      });

    needsSet.forEach((need) => {
      nodes.push({ id: need, name: need, group: GROUP_NEEDS });
    });

    servicesSet.forEach((service) => {
      nodes.push({ id: service, name: service, group: GROUP_SERVICES });
    });

    return { nodes, links };
  }, [speciesSet, showNeeds, showServices]);

  return (
    <Page className="species-page" isFullHeight>
      <div className="species-toggles">
        {speciesData.map((species) => (
          <label key={species.id}>
            <Toggle
              checked={speciesSet.has(species.id)}
              onChange={() => toggleSpecies(species.id)}
            />
            <Species species={species} />
          </label>
        ))}

        <label>
          <Toggle checked={showNeeds} onChange={() => setNeeds(!showNeeds)} />
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

      <div
        className={classnames("species-graph", {
          "species-graph-fullscreen": fullScreen,
        })}
        ref={containerRef}
      >
        <ForceGraph3D
          graphData={data}
          ref={graphRef}
          width={width}
          height={height}
          backgroundColor="rgb(0,0,0,0.5)"
          nodeThreeObject={renderSpeciesObject}
          linkColor={(link) => (link as Link).color}
          linkCurvature={0.3}
          linkOpacity={0.5}
          numDimensions={3} // 3D graph
          cooldownTicks={100}
          onEngineStop={() => graphRef?.current?.zoomToFit(400, 1)}
        />
        <button
          className="fullscreen-toggle"
          onClick={toggleFullscreen}
          title="Toggle fullscreen mode"
        >
          <Fullscreen />
        </button>
      </div>
    </Page>
  );
};

export default SpeciesPage;
