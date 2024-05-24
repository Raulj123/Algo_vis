import "./style.css";
import Wrapper from "./components/wrapper";
import Grid from "./components/renderGrid";

export default function Home() {
  return (
    <>
      <section className="flex flex-col lg:flex-row">
        <section className="flex h-screen w-full flex-col justify-between p-9 lg:h-auto">
          <Wrapper>
            <div className="mx-auto">
              <div className="leading-loose">
                <h1 className="text-3xl py-2">Here's how it works</h1>
                <ul className="list-disc list-inside">
                  <li>Each page presents a visualization of an algorithm</li>
                  <li>
                    Simply click the button and watch the algorithm unfold on
                    the right ➡️
                  </li>
                </ul>
              </div>
              <h1 className="text-3xl py-4">Algorithm</h1>
              <p>
                <span className="algo font-bold">Depth-First Search</span> or
                DFS algorithm is a recursive algorithm that uses the
                backtracking principle.
              </p>
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
