import React from "react";
import "./RecipeEdits.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaCalendarAlt } from "react-icons/fa";

import {
  faCalculator,
  faCalendarDays,
  faChartSimple,
  faCopy,
  faDownload,
  faFile,
  faPencil,
  faPlus,
  faPrint,
  faQrcode,
  faTrashCan,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { ingredientsData } from "../../data/ingredientsData";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const RecipeEdits = () => {
  const navigate = useNavigate();

  const onclickBookpage = () => {
    navigate("/book-page");
  };

  const recipeditanimation = {
    initial: { y: "100%" },
    animate: { y: 0 },
    exit: { y: "100%" },
    transition: { duration: 0.8 },
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

  return (
    <motion.section {...recipeditanimation} className="section-recipeedits">
      <div className="recipeedits-iconbox">
        <FontAwesomeIcon
          icon={faPlus}
          className="recipeedits-icon"
          onClick={onclickBookpage}
          title="Redirect to Book Page"
        />
        <FontAwesomeIcon icon={faCopy} className="recipeedits-icon" />
        <FontAwesomeIcon icon={faUpload} className="recipeedits-icon" />
        <FontAwesomeIcon icon={faDownload} className="recipeedits-icon" />
        <FontAwesomeIcon icon={faQrcode} className="recipeedits-icon" />
      </div>

      <div className="recipeedits-listbox">
        <div className="recipeedits-listboxsection">
          <div>
            <h2 className="recipeedits-listtitle">Pate a choux</h2>
          </div>
          <div className="recipeedits-iconbox">
            <FontAwesomeIcon icon={faPencil} className="recipeedits-listicon" />
            <FontAwesomeIcon
              icon={faChartSimple}
              className="recipeedits-listicon"
            />
            <FontAwesomeIcon icon={faFile} className="recipeedits-listicon" />
            <FontAwesomeIcon
              icon={faCalculator}
              className="recipeedits-listicon"
            />
            <FontAwesomeIcon
              icon={faTrashCan}
              className="recipeedits-listicon"
            />
            <FontAwesomeIcon icon={faPrint} className="recipeedits-listicon" />
          </div>
        </div>
        <div className="recipeedits-ingbox">
          <div>
            <h2 className="flex recipeedits-listtitle">
              Previsional de production&nbsp;
              <FontAwesomeIcon
                icon={faCalendarDays}
                className="recipeedits-listicon"
              />
            </h2>
          </div>

          <div className="receipeedits-column">
            <div>
              <h4 className="receipedits-columnname">Ingredients</h4>
            </div>

            <div>
              <h4 className="receipedits-columnname">Poids</h4>
            </div>
          </div>

          {ingredientsData.map((item, i) => (
            <div className="receipeedits-column" key={i}>
              <div className="receipeedits-ingcolumn">
                <div>
                  <h4 className="receipedits-ingname">{item.name}</h4>
                </div>
              </div>

              <div className="receipeedits-ingcolumn">
                <div>
                  <h4 className="receipedits-ingname">{item.weight}&nbsp;g</h4>
                </div>
              </div>
            </div>
          ))}
          <div className="hr">
            {ingredientsData.map((item, i) => (
              <motion.div
                className="numbers"
                key={i}
                {...ingredientPointsAnimation(i + 4)}
              ></motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default RecipeEdits;
