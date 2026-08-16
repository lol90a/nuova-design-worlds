import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type World = "light" | "dark";

const WorldCtx = createContext<{
  world: World;
  setWorld: (w: World) => void;
}>({ world: "light", setWorld: () => {} });

export function WorldProvider({ children }: { children: ReactNode }) {
  const [world, setWorld] = useState<World>("light");
  const value = useMemo(() => ({ world, setWorld }), [world]);
  return <WorldCtx.Provider value={value}>{children}</WorldCtx.Provider>;
}

export function useWorld() {
  return useContext(WorldCtx).world;
}

/** Declare the world a page belongs to (drives header + menu chrome). */
export function usePageWorld(world: World) {
  const { setWorld } = useContext(WorldCtx);
  useEffect(() => {
    setWorld(world);
    return () => setWorld("light");
  }, [world, setWorld]);
}
