import React, { useState } from "react";
import "./Book.css";
import Toggle from "../Toggle";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackward,
  faClose,
  faEuro,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { ingredientsData } from "../../data/ingredientsData";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

const Book = () => {
  const [toggle, setToggle] = useState(false);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  function increment() {
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
  }

  const bookanimation = (delay) => {
    return {
      initial: { opacity: 0, x: -0.05, x: 0 },
      animate: { opacity: 1, x: 0, x: -0.05 },
      transition: {
        delay: 0 + delay / 1,
        duration: 4,
      },
    };
  };

  const ingredientPointsAnimation = (delay) => {
    return {
      initial: { opacity: 0, y: -100 },
      animate: { opacity: 1, y: 0 },
      transition: {
        delay: 0.5 + delay / 10,
      },
    };
  };

  const successPage = () => {
    navigate("/success-page");
  };

  return (
    <motion.div
      key="page"
      initial={{ x: "20%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-20%", opacity: 0, transition: { duration: 0.6 } }}
      transition={{ delay: 0, duration: 0.6 }}
      className="cardcontainer"
    >
      <div className="front">
        {/* Side part of book view*/}

        {toggle ? (
          <motion.div className="bookpage" {...bookanimation(0)}>
            <div className="frontcontainer-row">
              <div className="ingredientsearchbar">
                <div>
                  <h3 className="ingredientsearchtext">Ingredients</h3>
                </div>
                <div className="">
                  <input type="text" className="ingredientsearchinput" />
                </div>
                <div className="iconpos">
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="ingredientsearchicon"
                  />
                </div>
              </div>
              <div className="ingredient-matchlist">
                <div className="ingredientbox">
                  <div className="ingredientbox-1">
                    <h4>Ingredients</h4>
                  </div>
                  {ingredientsData.map((ing, i) => (
                    <div className="inglist" key={i}>
                      <span className="ingname">{ing.name}</span>
                    </div>
                  ))}
                </div>
                <div className="bookhr">
                  {ingredientsData.map((item, i) => (
                    <motion.div
                      className="booknumbers"
                      key={i}
                      {...ingredientPointsAnimation(i + 3)}
                    >
                      {item.length}
                    </motion.div>
                  ))}
                </div>
                <div className="ingredientbox">
                  <div className="ingredientbox-1">
                    <h4>Weight</h4>
                  </div>
                  {ingredientsData.map((ing, i) => (
                    <div className="inglist" key={i}>
                      <span className="ingname">{ing.weight} g</span>
                    </div>
                  ))}
                </div>
                <div className="ingredientbox">
                  <div className="ingredientbox-1">
                    <h4>Cout</h4>
                  </div>
                  {ingredientsData.map((ing, i) => (
                    <div className="inglist" key={i}>
                      <span className="ingname">0.25</span>
                      <FontAwesomeIcon
                        style={{ marginLeft: "20px" }}
                        icon={faClose}
                        className="ingremoveicon"
                      >
                        {ing.weight}
                      </FontAwesomeIcon>
                    </div>
                  ))}
                </div>
              </div>
              <div className="totalcontent">
                <span>Cout au Kg</span>
                <span className="flex">
                  3,56 <FontAwesomeIcon icon={faEuro} />
                </span>
              </div>
              <div className="backicon">
                <FontAwesomeIcon
                  icon={faBackward}
                  className="front-icon"
                  onClick={() => setToggle(false)}
                />
              </div>
            </div>
            <div className="bookpagepad"></div>
          </motion.div>
        ) : (
          /* Front view part of book*/
          <div className="bookcorner">
            <div className="front-container"></div>
            <div className="frontcontainer-row">
              <div>
                <select name="selectedFruit">
                  <option value="apple">Apple</option>
                  <option value="banana">Banana</option>
                  <option value="orange">Orange</option>
                </select>
              </div>
              <div>
                <input type="text" className="front-input" placeholder="Nom" />
              </div>
              <div className="flex">
                <div>
                  <label className="switch">
                    <input type="checkbox"></input>
                    <span className="slider"></span>
                  </label>
                </div>
                <div>
                  <span className="recipecheckboxtext">
                    &nbsp;Recette utilisse dans dautres recettes
                  </span>
                </div>
              </div>
              <div className="front-conservation">
                <div>
                  <h4>Conservation</h4>
                </div>
                <div>
                  <div className="front-conservationitems">
                    <div className="flex">
                      <CiCircleMinus
                        className="front-icon"
                        onClick={decrement}
                      />
                      <span className="count">{count}</span>
                      <CiCirclePlus
                        className="front-icon"
                        onClick={increment}
                      />
                    </div>
                    <div>
                      <select name="selectedFruit">
                        <option value="apple">Apple</option>
                        <option value="banana">Banana</option>
                        <option value="orange">Orange</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="front-notesarea">
                <span className="front-notesheading">Notes</span>
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </div>
              <div className="flex">
                <Button submit={() => setToggle(true)} title="Annuler" />
              </div>
            </div>
          </div>
        )}
      </div>
      {toggle && (
        <motion.div className="bookcorner" {...bookanimation(0)}>
          {/* Second page of book */}
          <div className="front-container"></div>
          <div className="backcontainer-row totalcontent">
            <div>
              <span>Pate a choux</span>
            </div>
            <div>
              <span>Procede</span>
            </div>

            <div className="frontnotesbox">
              <div className="frontnotes">
                <div>
                  <span className="notesnumber">1</span>
                </div>
                <div>
                  <input type="text" className="notesinput" />
                </div>
              </div>
              <div className="frontnotes">
                <div>
                  <span className="notesnumber">2</span>
                </div>
                <div>
                  <input type="text" className="notesinput" />
                </div>
              </div>
              <div className="frontnotes">
                <div>
                  <span className="notesnumber">3</span>
                </div>
                <div>
                  <input type="text" className="notesinput" />
                </div>
              </div>
              <div className="frontnotes">
                <div>
                  <span className="notesnumber">4</span>
                </div>
                <div>
                  <input type="text" className="notesinput" />
                </div>
              </div>
              <div className="frontnotes">
                <div>
                  <span className="notesnumber">5</span>
                </div>
                <div>
                  <input type="text" className="notesinput" />
                </div>
              </div>
              <div className="frontnotes">
                <div>
                  <span className="notesnumber">6</span>
                </div>
                <div>
                  <input type="text" className="notesinput" />
                </div>
              </div>
              <div className="frontnotes">
                <div>
                  <span className="notesnumber">7</span>
                </div>
                <div>
                  <input type="text" className="notesinput" />
                </div>
              </div>
              <div className="frontnotes">
                <div>
                  <span className="notesnumber">8</span>
                </div>
                <div>
                  <input type="text" className="notesinput" />
                </div>
              </div>
              <div className="frontnotes">
                <div>
                  <span className="notesnumber">9</span>
                </div>
                <div>
                  <input type="text" className="notesinput" />
                </div>
              </div>
              <div className="frontnotes">
                <div>
                  <span className="notesnumber">10</span>
                </div>
                <div>
                  <input type="text" className="notesinput" />
                </div>
              </div>
            </div>

            <div className="btnbox">
              <Button title="Annuler" submit={() => setToggle(false)} />
              <Button title="Ajouter" submit={successPage} />
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Book;
