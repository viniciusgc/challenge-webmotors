import React, { Component } from "react";
import { connect } from "react-redux";
import Layout from "../container/layout";
import { Search, ListCars } from "../../components";
import {
  fetchMakes,
  fetchModels,
  fetchVersions,
  fetchVehicles,
  clearAll,
  clearVersions,
} from "./actions";
import "./style.scss";

class Home extends Component {
  componentDidMount() {
    this.props.fetchVehicles();
    this.props.fetchMakes();
  }

  handleMakes = async (id) => {
    await this.props.clearAll();
    if (id !== "") {
      this.props.fetchModels(id);
    }
  };

  handleModels = async (id) => {
    await this.props.clearVersions();
    if (id !== "") {
      this.props.fetchVersions(id);
    }
  };

  render() {
    const { makes, models, versions, vehicles } = this.props;
    return (
      <Layout>
        <Search
          makes={makes}
          models={models}
          versions={versions}
          handleMakes={(id) => this.handleMakes(id)}
          handleModels={(id) => this.handleModels(id)}
        />
        <ListCars
          vehicles={vehicles}
          handleCars={(page) => this.props.fetchVehicles(page)}
        />
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  const { makes } = state;

  return { ...makes };
};

const mapDispatchToProps = {
  fetchMakes,
  fetchModels,
  fetchVersions,
  clearAll,
  clearVersions,
  fetchVehicles,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
