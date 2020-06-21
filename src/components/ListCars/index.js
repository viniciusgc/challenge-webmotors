import React, { Component } from "react";
import { MaterialCommunityIcons } from "react-web-vector-icons";
import "./styles.scss";

class ListCars extends Component {
  render() {
    const { vehicles } = this.props;
    return (
      <>
        <div className="row mt-2 titles-section">
          <div className="col-md-10">
            <h2>Carros Usados e Seminovos</h2>
            <p>{vehicles.length} carros encontrados</p>
          </div>
          <div className="col-md-2 pages">
            <select
              onChange={(value) => this.props.handleCars(value.target.value)}
            >
              <option value="1">Página 1</option>
              <option value="2">Página 2</option>
              <option value="3">Página 3</option>
            </select>
          </div>
        </div>
        <div className="row mt-2 list-cards">
          {vehicles.map((item) => (
            <div className="col-md-4">
              <div className="card">
                <img src={item.Image}></img>
                <div className="card-body">
                  <h4>{`${item.Make} ${item.Model}`}</h4>
                  <p className="version">{`${item.Version} (${item.Color})`}</p>
                  <p className="price">R$: {item.Price}</p>
                  <div className="info">
                    <span> {`${item.YearFab}/${item.YearModel}`}</span>
                    <span>{item.KM} Km</span>
                  </div>
                </div>
                <div className="footer">
                  <span>
                    <MaterialCommunityIcons
                      name="map-marker-outline"
                      size={14}
                      color="#cb3b2e"
                    />{" "}
                    São Paulo
                  </span>
                  <span>
                    {" "}
                    <MaterialCommunityIcons
                      name="heart-outline"
                      size={14}
                      color="#cb3b2e"
                    />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default ListCars;
