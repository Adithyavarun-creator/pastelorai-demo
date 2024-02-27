import {
  faLeaf,
  faFileLines,
  faBoxesPacking,
  faBreadSlice,
  faKitchenSet,
  faPuzzlePiece,
  faSpinner,
  faScrewdriverWrench,
  faMagnifyingGlassChart,
  faUsers,
  faTag,
  faCalculator,
} from "@fortawesome/free-solid-svg-icons";

import { library } from "@fortawesome/fontawesome-svg-core";

library.add(
  faLeaf,
  faFileLines,
  faBoxesPacking,
  faBreadSlice,
  faKitchenSet,
  faPuzzlePiece,
  faSpinner,
  faScrewdriverWrench,
  faMagnifyingGlassChart,
  faUsers,
  faTag,
  faCalculator
);

export const economatLinks = [
  { title: "Economat" },
  {
    id: 1,
    linkname: "Ingredients",
    linkicon: faLeaf,
  },
  {
    id: 2,
    linkname: "Factures",
    linkicon: faFileLines,
  },
  {
    id: 3,
    linkname: "Fornisseurs",
    linkicon: faBoxesPacking,
  },
];

export const labLinks = [
  { title: "Laboraitore" },
  {
    id: 1,
    linkname: "Recettes",
    linkicon: faKitchenSet,
  },
  {
    id: 2,
    linkname: "Produits",
    linkicon: faBreadSlice,
  },
];

export const boutiqueLinks = [
  { title: "Boutique" },
  {
    id: 1,
    linkname: "games",
    linkicon: faPuzzlePiece,
  },
  {
    id: 2,
    linkname: "production",
    linkicon: faSpinner,
  },
];

export const bureauLinks = [
  { title: "Beureau" },
  {
    id: 1,
    linkname: "equipe",
    linkicon: faUsers,
  },
  {
    id: 2,
    linkname: "equipments",
    linkicon: faScrewdriverWrench,
  },
  {
    id: 3,
    linkname: "Analyze",
    linkicon: faMagnifyingGlassChart,
  },
  {
    id: 4,
    linkname: "etiquetage",
    linkicon: faTag,
  },
  {
    id: 5,
    linkname: "compatibility",
    linkicon: faCalculator,
  },
];
