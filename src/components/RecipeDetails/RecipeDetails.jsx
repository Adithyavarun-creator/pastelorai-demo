import React from "react";
import "./RecipeDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEuroSign, faSort } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const RecipeDetails = () => {
  const cardVariants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,
      rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const recipedetailboard = {
    initial: { y: "-100%" },
    animate: { y: 0 },
    exit: { y: "-100%" },
    transition: { duration: 0.8 },
  };

  return (
    <motion.section {...recipedetailboard} className="section-recipedetail">
      <div className="recipedetail-stepbox">
        <div className="recipedetailspan">
          <span className="recipedetail-step">Pastes </span>
          <span className="recipedetail-step">Biscuits </span>
        </div>
        <div className="recipedetailspan">
          <span className="recipedetail-step">Garnitures</span>
          <span className="recipedetail-step">Chaudes</span>
        </div>
        <div className="recipedetailspan">
          <span className="recipedetail-step">Garnitures</span>
          <span className="recipedetail-step">Froides</span>
        </div>
        <div className="recipedetailspan">
          <span className="recipedetail-step">Decors</span>
          <span className="recipedetail-step">Autres</span>
        </div>
        <div className="recipedetailspan">
          <span className="recipedetail-step">Tout</span>
          <span className="recipedetail-step">Afficher</span>
        </div>
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
