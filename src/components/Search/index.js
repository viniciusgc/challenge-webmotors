import React, { Component } from "react";
import { FontAwesome, MaterialCommunityIcons } from "react-web-vector-icons";
import "./styles.scss";

class Search extends Component {
  state = {
    stateCars: [1],
    link: 1,
    make: null,
    price: null,
    year: null,
    place: null,
    range: null,
  };

  render() {
    const onCheckboxBtnClick = (selected) => {
      const cSelected = this.state.stateCars;
      const index = cSelected.indexOf(selected);
      if (index < 0) {
        cSelected.push(selected);
      } else {
        cSelected.splice(index, 1);
      }
      this.setState({ stateCars: [...cSelected] });
    };

    const handleClearFields = () => {
      this.setState({ make: "", year: "", place: "", range: "", price: "" });
      this.props.handleMakes("");
    };

    const { stateCars, link } = this.state;
    const { makes, models, versions } = this.props;
    return (
      <>
        <div className="row nav">
          <div
            className={
              link === 1 ? "border-active col-md-3" : " border col-md-3"
            }
            href="#"
          >
            <a
              href="#"
              className="link-main"
              onClick={() => this.setState({ link: 1 })}
            >
              <FontAwesome
                name="car"
                size={26}
                color={link === 1 ? "#cb3b2e" : "#777"}
              />
              <div>
                <p className="title-one">COMPRAR </p>
                <span
                  className={link === 1 ? "primary title-two" : "title-two"}
                >
                  CARROS
                </span>
              </div>
            </a>
          </div>
          <div
            className={
              link === 2 ? "border-active col-md-3" : "border col-md-3"
            }
          >
            <a
              href="#"
              className="link-main"
              onClick={() => this.setState({ link: 2 })}
            >
              <FontAwesome
                name="motorcycle"
                size={26}
                color={link === 2 ? "#cb3b2e" : "#777"}
              />
              <div>
                <p className="title-one">COMPRAR</p>
                <span
                  className={link === 2 ? "primary title-two" : "title-two"}
                >
                  MOTOS
                </span>
              </div>
            </a>
          </div>
          <div className="col-md-3 btn-sell">
            <button>Vender meu carro</button>
          </div>
        </div>
        <div className="search-card">
          <div className="row mb-1">
            <div className="col-md-12 pl-0">
              <label class="checkbox-inline">
                <input
                  type="checkbox"
                  onClick={() => onCheckboxBtnClick(1)}
                  checked={stateCars.includes(1)}
                />
                Novos
                <span class="checkmark"></span>
              </label>
              <label class="checkbox-inline">
                <input
                  type="checkbox"
                  onClick={() => onCheckboxBtnClick(2)}
                  checked={stateCars.includes(2)}
                />
                Usados
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 pl-0">
              <div className="select-wrap">
                <label className="label-custom">
                  <MaterialCommunityIcons
                    name="map-marker-outline"
                    size={26}
                    color="#cb3b2e"
                  />{" "}
                  Onde:
                </label>
                <select
                  className="location"
                  value={this.state.place}
                  onChange={(value) =>
                    this.setState({ place: value.target.value })
                  }
                >
                  <option value="">---</option>
                  <option value="yellow">São Paulo - SP</option>
                </select>
                <label>Raio:</label>
                <select
                  className="range"
                  value={this.state.range}
                  onChange={(value) =>
                    this.setState({ range: value.target.value })
                  }
                >
                  <option value="">---</option>
                  <option value="yellow">40km</option>
                  <option value="red">60km</option>
                  <option value="green">100Km</option>
                  <option value="green">200Km</option>
                </select>
              </div>
            </div>

            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6 pl-0">
                  <div className="select-wrap">
                    <label>Marca:</label>
                    <select
                      onChange={(value) => {
                        this.setState({ make: value.target.value });
                        this.props.handleMakes(value.target.value);
                      }}
                      value={this.state.make}
                    >
                      <option value="">---</option>
                      {makes.map((make) => (
                        <option value={make.ID}>{make.Name}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-md-6 pr-0">
                  <div className="select-wrap">
                    <label>Modelo:</label>
                    <select
                      onChange={(value) =>
                        this.props.handleModels(value.target.value)
                      }
                    >
                      <option value="">---</option>
                      {models.map((model) => (
                        <option value={model.ID}>{model.Name}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6 pl-0">
              <div className="row">
                <div className="col-md-6 pl-0">
                  <div className="select-wrap">
                    <select
                      className="custom-selct"
                      value={this.state.year}
                      onChange={(value) =>
                        this.setState({ year: value.target.value })
                      }
                    >
                      <option value="">Ano Desejado</option>
                      <option value="yellow">1995</option>
                      <option value="yellow">2000</option>
                      <option value="yellow">2005</option>
                      <option value="yellow">2010</option>
                      <option value="yellow">2015</option>
                      <option value="yellow">2020</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6 pr-0">
                  <div className="select-wrap">
                    <select
                      className="custom-selct"
                      value={this.state.price}
                      onChange={(value) =>
                        this.setState({ price: value.target.value })
                      }
                    >
                      <option value="">Faixa de Preço</option>
                      <option value="yellow">R$: 30.000</option>
                      <option value="red">R$: 40.000</option>
                      <option value="green">R$: 50.000</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="select-wrap">
                <label>Versão:</label>
                <select>
                  <option value="">---</option>
                  {versions.map((version) => (
                    <option value={version.ID}>{version.Name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 advanced">
              <a href="javascript:void()" className="bold">
                <FontAwesome name="chevron-right" size={12} color="#cb3b2e" />{" "}
                Busca Avançada
              </a>
            </div>
            <div className="col-md-6 clear-search">
              <div className="row">
                <div className="col-md-4 pl-0">
                  <a
                    href="javascript:void()"
                    className="link-clear"
                    onClick={() => handleClearFields()}
                  >
                    Limpar filtros
                  </a>
                </div>
                <div className="col-md-8 pr-0">
                  <button className="btn-primary  btn-show bold">
                    VER OFERTAS
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Search;
