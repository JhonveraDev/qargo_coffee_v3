import { incomingStatesData } from "../data/incomingStates.data";


export const StatesGrid = () => {
  return (
    <section className="states-grid">
      <div className="states-grid__background"></div>
      <div className="states-grid__container">
        <h3>Incoming States</h3>
        <div className="states-grid__container-states">
          {incomingStatesData.map((state, id) => (
            <p key={id}>{state}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
