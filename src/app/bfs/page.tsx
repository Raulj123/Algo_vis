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
              
              <h1 className="text-3xl py-4">Algorithm</h1>
              <p>
                <span className="algo font-bold">Breath-First Search</span> or
                
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
