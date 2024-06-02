import "../style.css";
import Wrapper from "../components/wrapper";
import Grid from "../components/renderGrid";

export default function Home() {
  return (
    <>
      <section className="flex flex-col lg:flex-row">
        <section className="flex h-screen w-full flex-col justify-between p-9 lg:h-auto">
          <Wrapper>
            <div className="mx-auto">
              <div className="leading-loose">
              <h1 className="text-3xl py-4">Algorithm</h1>
              
              <p>
                <span className="algo font-bold">Breath-First Search</span> Breadth-first search is an algorithm for searching a tree data structure for a node that satisfies a given property. It starts at the tree root and explores all nodes at the present depth prior to moving on to the nodes at the next depth level.
              </p>
              </div>
            </div>
          </Wrapper>
        </section>
        <section className="hidden lg:flex h-screen w-full flex-col justify-center items-center bg-[#d6ebe9] p-9">
          <Grid />
        </section>
      </section>
    </>
  );
}
