import React from "react";
import "./RecipeDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEuroSign, faSort } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { contentData } from "../../data/contentData";

const RecipeDetails = () => {
  const recipedetailboard = {
    initial: { y: "-100%" },
    animate: { y: 0 },
    exit: { y: "-100%" },
    transition: { duration: 0.8 },
  };

  const ingredientPointsAnimation = (delay) => {
    return {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
      transition: {
        delay: 0.5 + delay / 10,
      },
    };
  };

  return (
    <motion.section {...recipedetailboard} className="section-recipedetail">
      <div className="recipedetail-stepbox">
        {contentData.map((content, i) => (
          <div className="recipedetailspan" key={i}>
            <span className="recipedetail-step">{content.name} </span>
            <span className="recipedetail-step">{content.subname} </span>
          </div>
        ))}

        <div className="borderbox">
          <hr className="borderline" />
        </div>
      </div>

      <div className="rowlines">
        {contentData.map((content, i) => (
          <div className="recipedetail-link" key={i}>
            <motion.div
              className="recipedetail-linkdots"
              {...ingredientPointsAnimation(i + 4)}
            ></motion.div>
          </div>
        ))}
      </div>

      <div className="tablediv">
        <table className="content-table">
          <thead>
            <tr>
              <th>
                <FontAwesomeIcon icon={faSort} />
                &nbsp; recettes
              </th>
              <th>
                <FontAwesomeIcon icon={faSort} />
                &nbsp;realisation
              </th>
              <th>
                {" "}
                <FontAwesomeIcon icon={faSort} />
                &nbsp;conservation
              </th>
              <th>
                {" "}
                <FontAwesomeIcon icon={faSort} />
                &nbsp;produits
              </th>
              <th>
                {" "}
                <FontAwesomeIcon icon={faSort} />
                &nbsp;cout
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>pate a choux</td>
              <td>1h 20m</td>
              <td>3 jours</td>
              <td>6</td>
              <td className="flex">
                11,38 <FontAwesomeIcon icon={faEuroSign} />
                &nbsp;/&nbsp;kg
              </td>
            </tr>
            <tr>
              <td>pate a choux</td>
              <td>1h 20m</td>
              <td>3 jours</td>
              <td>6</td>
              <td className="flex">
                11,38 <FontAwesomeIcon icon={faEuroSign} />
                &nbsp;/&nbsp;kg
              </td>
            </tr>
            <tr>
              <td>pate a choux</td>
              <td>1h 20m</td>
              <td>3 jours</td>
              <td>6</td>
              <td className="flex">
                11,38 <FontAwesomeIcon icon={faEuroSign} />
                &nbsp;/&nbsp;kg
              </td>{" "}
            </tr>
            <tr>
              <td>pate a choux</td>
              <td>1h 20m</td>
              <td>3 jours</td>
              <td>6</td>
              <td className="flex">
                11,38 <FontAwesomeIcon icon={faEuroSign} />
                &nbsp;/&nbsp;kg
              </td>{" "}
            </tr>

            <tr>
              <td>pate a choux</td>
              <td>1h 20m</td>
              <td>3 jours</td>
              <td>6</td>
              <td className="flex">
                11,38 <FontAwesomeIcon icon={faEuroSign} />
                &nbsp;/&nbsp;kg
              </td>{" "}
            </tr>
            <tr>
              <td>pate a choux</td>
              <td>1h 20m</td>
              <td>3 jours</td>
              <td>6</td>
              <td className="flex">
                11,38 <FontAwesomeIcon icon={faEuroSign} />
                &nbsp;/&nbsp;kg
              </td>{" "}
            </tr>
            <tr>
              <td>pate a choux</td>
              <td>1h 20m</td>
              <td>3 jours</td>
              <td>6</td>
              <td className="flex">
                11,38 <FontAwesomeIcon icon={faEuroSign} />
                &nbsp;/&nbsp;kg
              </td>{" "}
            </tr>
            <tr>
              <td>pate a choux</td>
              <td>1h 20m</td>
              <td>3 jours</td>
              <td>6</td>
              <td className="flex">
                11,38 <FontAwesomeIcon icon={faEuroSign} />
                &nbsp;/&nbsp;kg
              </td>{" "}
            </tr>
            <tr>
              <td>pate a choux</td>
              <td>1h 20m</td>
              <td>3 jours</td>
              <td>6</td>
              <td className="flex">
                11,38 <FontAwesomeIcon icon={faEuroSign} />
                &nbsp;/&nbsp;kg
              </td>{" "}
            </tr>
          </tbody>
        </table>
      </div>
    </motion.section>
  );
};

export default RecipeDetails;
