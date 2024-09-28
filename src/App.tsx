import { useState, Suspense, lazy, createContext } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useHash } from "./hooks/useHash";
import { Timers } from "./components/Timers";
import { TimerModal } from "./components/TimerModal";
import { Timer } from "./types/Timer";
import { Loader } from "./components/Loader";
import { VersionContext } from "./VersionContext";
import "./styles.css";

// Lazy load pages to improve loading time
const LazyBuildings = lazy(() => import("./pages/BuildingsPage"));
const LazyGoods = lazy(() => import("./pages/GoodsPage"));
const LazySpecies = lazy(() => import("./pages/SpeciesPage"));

export default function App() {
  const [hash] = useHash();
  const [page, setPage] = useState<string | ((hash: string) => void) | null>(
    hash || "buildings"
  );
  const [timers, setTimers] = useState<Timer[]>([]);
  const [showModal, setModal] = useState<boolean>(false);
  const [version, setVersion] = useState<string>("1.4");

  const addTimer = () => {
    setModal(true);
  };
  const onOkTimer = (name: string, time: number) => {
    const id = timers.length + 1;
    setModal(false);
    setTimers([...timers, { id, name: name || `Timer ${id}`, time }]);
  };

  let pageComponent = null;
  switch (page) {
    case "goods":
      pageComponent = <LazyGoods version={version} />;
      break;

    case "species":
      pageComponent = <LazySpecies version={version} />;
      break;

    case "buildings":
    default:
      pageComponent = <LazyBuildings version={version} />;
  }

  return (
    <>
      <div className="App">
        <Header
          onSetPage={setPage}
          onAddTimer={addTimer}
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
        show={showModal}
        onOk={onOkTimer}
        onCancel={() => setModal(false)}
      />
    </>
  );
}
