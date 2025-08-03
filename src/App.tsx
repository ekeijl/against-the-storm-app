import { useState, Suspense, lazy, useRef } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useHash } from "./hooks/useHash";
import { Timers } from "./components/Timers";
import { TimerModal } from "./components/TimerModal";
import type { Timer } from "./types/Timer";
import type { Page } from "./types/Page";
import { Loader } from "./components/Loader";
import { VersionContext, VersionContextType } from "./VersionContext";
import "./styles.css";

// Lazy load pages to improve loading time
const LazyBuildings = lazy(() => import("./pages/BuildingsPage"));
const LazyGoods = lazy(() => import("./pages/GoodsPage"));
const LazySpecies = lazy(() => import("./pages/SpeciesPage"));

const CURRENT_VERSION = "1.8";
const initialTimers: Timer[] = [];
const pages: Page[] = ["buildings", "goods", "species"];

function createTimer({ id, name, time }: Timer): Timer {
  return {
    id,
    name,
    time,
    paused: false,
  };
}

export default function App() {
  const [hash] = useHash();
  const [page, setPage] = useState(hash || "buildings");
  const [timers, setTimers] = useState<Timer[]>(initialTimers);
  const [showModal, setModal] = useState<boolean>(false);
  const [version, setVersion] = useState<VersionContextType>(CURRENT_VERSION);

  const onAddTimer = (id: string, name: string, time: number) => {
    setModal(false);
    setTimers([
      ...timers,
      createTimer({ id, name: name || `Timer ${id + 1}`, time }),
    ]);
  };

  let pageComponent = null;
  switch (page) {
    case "goods":
      pageComponent = <LazyGoods />;
      break;

    case "species":
      pageComponent = <LazySpecies />;
      break;

    case "buildings":
    default:
      pageComponent = <LazyBuildings />;
  }

  return (
    <>
      <div className="App">
        <Header
          pages={pages}
          onSetPage={setPage}
          onAddTimer={() => setModal(true)}
          version={version}
          setVersion={setVersion}
        />

        <Suspense fallback={<Loader />}>
          <Timers timers={timers} setTimers={setTimers} />
          <VersionContext.Provider value={version}>
            {pageComponent}
          </VersionContext.Provider>
        </Suspense>

        <Footer />
      </div>
      <TimerModal
        key={timers.length}
        timers={timers}
        show={showModal}
        onOk={onAddTimer}
        onCancel={() => setModal(false)}
      />
    </>
  );
}
