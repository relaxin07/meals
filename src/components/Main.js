import React, { useContext, useEffect } from "react"
import { MealsContext } from "./context/context-meals"
import { API_URL } from "../config"

export const Main = () => {
  const value = useContext(MealsContext)

  useEffect(() => {

      fetch(API_URL + "/categories.php").then((res) => {
        return res.json()

      }).then((data) => {
        value.setCategories(data.categories)
      })

    }, [],
  )

  return (
    <>
      <ul>
        {value.categories.map((item) => {
          return <li>{item.strCategory} </li>
        })}
      </ul>
    </>
  )
}