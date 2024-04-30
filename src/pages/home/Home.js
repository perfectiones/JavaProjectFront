import { useEffect, useState } from "react";
import { Header } from "../../components/header/Header";
import "./style.scss";
import { getSome } from "../../app/api/tour";
import Draggable from "react-draggable";
import instance from "../../app/axiosClient";

const Home = () => {
  const [elementList, setElementList] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        let res = await getSome();
        setElementList(res);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const [updateList, setUpdateList] = useState(false);
 

  function updateFunction() {
    async function fetchData() {
      try {
        let res = await getSome();
        setElementList(res);
        setUpdateList(false);
        console.log('dfsf');
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }
  return (
    <div>
      <section id="header">
        <Header />
        <div className="container m-centr">
          <ul className="element__list flex">
            {elementList.map((el, i) => (
              <li className="element__item">
                <div>
                  <p>
                    Название бренда:
                    {el.brand}
                  </p>
                </div>
                <div>
                  <p>
                    substanceAnode:
                    {el.substanceAnode}
                  </p>
                </div>
                <div>
                  <p>
                    substanceCatode: voltage
                    {el.substanceCatode}
                  </p>
                </div>
                <div>
                  <p>
                    voltage:
                    {el.voltage}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <DraggForm updateFunction={updateFunction} />
          <DraggStatistic />
        </div>
      </section>
    </div>
  );
};

export default Home;

function DraggForm({ updateFunction }) {
  const [state, setState] = useState({
    activeDrags: 0,
    deltaPosition: {
      x: 0,
      y: 0,
    },
    controlledPosition: {
      x: -400,
      y: 200,
    },
  });

  const [formElement, setFormElement] = useState({
    brand: null,
    substanceAnode: null,
    substanceCatode: null,
    capacity: null,
    voltage: null,
  });
  function onStart() {
    setState({ activeDrags: ++state.activeDrags });
    console.log(state.activeDrags);
  }
  function onStop() {
    setState({ activeDrags: --state.activeDrags });
  }
  const dragHandlers = { onStart: onStart, onStop: onStop };

  async function postElement() {
    try {
      instance.post("/add", formElement);
      updateFunction();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Draggable handle="strong" {...dragHandlers}>
      <div className="element__form">
        <strong className="cursor" style={{ cursor: "pointer" }}>
          <div className="form__list">
            <p className="fs24">Создание нового элемента</p>
            <div>
              <p>
                Название бренда:
                <input
                  type="text"
                  onChange={(event) =>
                    setFormElement({
                      ...formElement,
                      brand: event.target.value,
                    })
                  }
                />
              </p>
            </div>
            <div>
              <p>
                substanceAnode:
                <input
                  type="text"
                  onChange={(event) =>
                    setFormElement({
                      ...formElement,
                      substanceAnode: event.target.value,
                    })
                  }
                />
              </p>
            </div>
            <div>
              <p>
                substanceCatode:
                <input
                  type="text"
                  onChange={(event) =>
                    setFormElement({
                      ...formElement,
                      substanceCatode: event.target.value,
                    })
                  }
                />
              </p>
            </div>
            <div>
              <p>
                voltage:
                <input
                  type="number"
                  onChange={(event) =>
                    setFormElement({
                      ...formElement,
                      voltage: event.target.value,
                    })
                  }
                />
              </p>
            </div>
          </div>
          {(formElement.brand != null && formElement.capacity != null,
          formElement.substanceAnode != null,
          formElement.substanceCatode != null,
          formElement.voltage != null) ? (
            <button className="m-centr" onClick={postElement}>
              Отправить
            </button>
          ) : (
            <></>
          )}
        </strong>
      </div>
    </Draggable>
  );
}

function DraggStatistic() {
  const [state, setState] = useState({
    activeDrags: 0,
    deltaPosition: {
      x: 0,
      y: 0,
    },
    controlledPosition: {
      x: -400,
      y: 200,
    },
  });

 
  function onStart() {
    setState({ activeDrags: ++state.activeDrags });
  }
  function onStop() {
    setState({ activeDrags: --state.activeDrags });
  }
  const dragHandlers = { onStart: onStart, onStop: onStop };

  const [statistic, setStatistic] = useState({
    maxVoltage: null,
    averageVoltage: null,
    overallVoltage: null,
  });
  async function getStatistic() {
    try {
      let res = await instance.get("/stat");
      console.log(res);
      setStatistic(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Draggable handle="strong" {...dragHandlers}>
      <div className="stat__form">
        <strong className="cursor" style={{ cursor: "pointer" }}>
          <div className="form__list">
            <p className="fs24">Статистика</p>
            <div>
              <p>Максимальный вольтаж: {statistic.maxVoltage}</p>
            </div>
            <div>
              <p>Средний вольтаж: {statistic.averageVoltage}</p>
            </div>
            <div>
              <p>Общий вольтаж: {statistic.overallVoltage}</p>
            </div>
          </div>

          <button className="m-centr" onClick={getStatistic}>
            Получить статистику
          </button>
        </strong>
      </div>
    </Draggable>
  );
}
