import React, { Component } from "react";
import { FormControl } from "react-bootstrap";
import Axios from "../../../../../config/AxiosFile";
import { SuccessToast, ErrorToast } from "../../../../../components/Toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-date-picker";
import moment from "moment";

export default class CreateTournamentForm extends Component {
  // state
  state = {
    // checks state
    checkKill: false,
    checkFragger: false,
    checkFeature: false,
    checkRules: false,

    // error state
    errors: null,

    // form state
    tournamentName: "",
    organizerName: "",
    regFee: "",
    tournamentType: "squad",
    firstPrize: "",
    secondPrize: "",
    thirdPrize: "",
    killPrize: "",
    topFraggerPrize: "",
    tournamentDetail: "",
    oneRule: "",
    rules: [],
    registrationEnd: new Date(),
    startingDate: new Date(),
  };

  // hangle checks fun
  activeKill = () => {
    this.setState({
      checkKill: !this.state.checkKill,
    });
  };
  activeFragger = () => {
    this.setState({
      checkFragger: !this.state.checkFragger,
    });
  };
  activeRules = () => {
    this.setState({
      checkRules: !this.state.checkRules,
    });
    if (this.state.rules.length > 0) {
      this.setState({
        rules: [],
      });
    }
  };
  handleFeature = () => {
    this.setState({
      checkFeature: !this.state.checkFeature,
    });
  };

  //   form fuc
  getTournamentName = (e) => {
    this.setState({
      tournamentName: e.target.value,
    });
  };
  getOrgnizationName = (e) => {
    this.setState({
      organizerName: e.target.value,
    });
  };
  getRegistrationFee = (e) => {
    this.setState({
      regFee: e.target.value,
    });
  };
  getTournamentType = (e) => {
    this.setState({
      tournamentType: e.target.value,
    });
  };
  getFirstPrize = (e) => {
    this.setState({
      firstPrize: e.target.value,
    });
  };
  getSecondPrize = (e) => {
    this.setState({
      secondPrize: e.target.value,
    });
  };
  getThirdPrize = (e) => {
    this.setState({
      thirdPrize: e.target.value,
    });
  };
  getKillPrize = (e) => {
    this.setState({
      killPrize: e.target.value,
    });
  };
  getTopFraggerPrize = (e) => {
    this.setState({
      topFraggerPrize: e.target.value,
    });
  };
  getTournamentDetail = (e) => {
    this.setState({
      tournamentDetail: e.target.value,
    });
  };
  getOneRule = (e) => {
    this.setState({
      oneRule: e.target.value,
    });
  };
  getRegistrationEndDate = (value) => {
    this.setState({
      registrationEnd: value,
    });
  };
  getStartingDate = (value) => {
    this.setState({
      startingDate: value,
    });
  };
  getMaxDate = () => {
    var maxDate = moment().add(3, "months");
    console.log(maxDate);
    return maxDate;
  };

  // Add Rule fun
  addRule = () => {
    const { rules, oneRule } = this.state;
    console.log(oneRule, rules);
    rules.push(oneRule);
    this.setState({
      rules: rules,
      oneRule: "",
    });
  };

  //   sumbit fun
  Submit = async () => {
    const {
      tournamentName,
      organizerName,
      tournamentDetail,
      checkFeature,
      checkKill,
      checkFragger,
      checkRules,
      tournamentType,
      firstPrize,
      secondPrize,
      thirdPrize,
      killPrize,
      topFraggerPrize,
      regFee,
      rules,
      startingDate,
      registrationEnd,
    } = this.state;
    var formValues = {
      tournamentName,
      organizerName,
      tournamentDetail,
      feature: checkFeature,
      tournamentType,
      firstPrize,
      secondPrize,
      thirdPrize,
      regFee,
      startingDate,
      registrationEnd,
    };
    if (checkKill) formValues["killPrize"] = killPrize;

    if (checkFragger) formValues["topFraggerPrize"] = topFraggerPrize;

    if (checkRules) formValues["rules"] = rules;
    try {
      const response = await Axios.post("/api/tournament/create", formValues, {
        withCredentials: true,
      });
      if (response) {
        SuccessToast("Tournament Created Successfully !");
      }
    } catch (error) {
      this.setState({
        errors: error.response.data,
      });
      ErrorToast("Oops ! there are some Errors");
    }
  };
  // render main fun
  render() {
    const { checkFragger, checkKill, errors, checkRules, rules } = this.state;
    return (
      <div>
        <div className="formContainer squadFormClipPath">
          <h5 className="basicTitle2 text-center mb-0 pt-4">Basic Info</h5>
          <div className="formInputDiv  ">
            <label className="formLabel">Tournament Name</label>
            <input
              type="text"
              className="formInput"
              placeholder="Enter Tournament Name"
              onChange={this.getTournamentName}
            ></input>
          </div>
          <div className="formInputDiv ">
            <label className="formLabel">Organizer Name</label>
            <input
              type="text"
              className="formInput"
              placeholder="Enter Orgnizer Name"
              onChange={this.getOrgnizationName}
            ></input>
          </div>

          <div className="formInputDiv ">
            <label className="formLabel">Tornament Type</label>
            <FormControl
              as="select"
              className="ml-1 formInput"
              id="inlineFormCustomSelect"
              custom
              style={{ width: "90px" }}
              onChange={this.getTournamentType}
            >
              <option value="squad">Squad</option>
              <option value="duo">Duo</option>
              <option value="solo">Solo</option>
            </FormControl>
          </div>
          <div className="formInputDiv ">
            <label className="formLabel">Entry Fee</label>
            <input
              type="text"
              className="formInput"
              placeholder="ie 200"
              onChange={this.getRegistrationFee}
              style={{ width: "100px" }}
            ></input>
            <div className="suffixDiv">PKR</div>
          </div>
          <div className="formInputDiv ">
            <label className="formLabel">Registration Ends</label>
            <DatePicker
              onChange={this.getRegistrationEndDate}
              value={this.state.registrationEnd}
              minDate={new Date()}
            />
          </div>
          <div className="formInputDiv ">
            <label className="formLabel pr-4">Starting Date</label>
            <DatePicker
              onChange={this.getStartingDate}
              value={this.state.startingDate}
              minDate={new Date()}
            />
          </div>

          <div className="centerDiv mt-2">
            <label className="formLabel">
              <input
                type="checkbox"
                checked={this.state.checkFeature}
                onChange={this.handleFeature}
              />
              Want to Feature your tournament ?
            </label>
          </div>
          <h5 className="basicTitle2 text-center mb-0 mt-4">
            Prize Distribution
          </h5>
          <div className="formInputDiv ">
            <label className="formLabel">First Prize</label>
            <input
              type="text"
              className="formInput"
              placeholder="ie 3000"
              onChange={this.getFirstPrize}
              style={{ width: "100px" }}
            ></input>
            <div className="suffixDiv">PKR</div>
          </div>
          <div className="formInputDiv ">
            <label className="formLabel">Second Prize</label>
            <input
              type="text"
              className="formInput"
              placeholder="ie 1000"
              onChange={this.getSecondPrize}
              style={{ width: "100px" }}
            ></input>
            <div className="suffixDiv">PKR</div>
          </div>
          <div className="formInputDiv ">
            <label className="formLabel">Third Prize</label>
            <input
              type="text"
              className="formInput"
              placeholder="ie 500"
              onChange={this.getThirdPrize}
              style={{ width: "100px" }}
            ></input>
            <div className="suffixDiv">PKR</div>
          </div>
          <div className="centerDiv mt-3">
            <label className="formLabel">
              <input
                type="checkbox"
                checked={this.state.checkKill}
                onChange={this.activeKill}
              />
              Add Per Kill Prize
            </label>
          </div>
          {checkKill && (
            <div className="formInputDiv ">
              <label className="formLabel"> Per Kill Prize</label>
              <input
                type="text"
                className="formInput"
                placeholder="Enter Kill Prize"
                onChange={this.getKillPrize}
              ></input>
              <div className="suffixDiv">PKR</div>
            </div>
          )}
          <div className="centerDiv mt-2">
            <label className="formLabel">
              <input
                type="checkbox"
                checked={this.state.checkFragger}
                onChange={this.activeFragger}
              />
              Add Top Fragger Prize
            </label>
          </div>

          {checkFragger && (
            <div className="formInputDiv ">
              <label className="formLabel">Top Fragger</label>
              <input
                type="text"
                className="formInput"
                placeholder="Enter Top Fragger Prize"
                onChange={this.getTopFraggerPrize}
              ></input>
              <div className="suffixDiv">PKR</div>
            </div>
          )}
          <h5 className="basicTitle2 text-center mb-0 pt-4">
            Tournament Detail
          </h5>
          <div className="formInputDiv  pb-4">
            <textarea
              type="text"
              className="formInput"
              placeholder="Enter details about your tournament "
              onChange={this.getTournamentDetail}
              style={{ width: "250px" }}
              rows="5"
            ></textarea>
          </div>
          <div className="centerDiv mt-2 ">
            <label className="formLabel">
              <input
                type="checkbox"
                checked={this.state.checkRules}
                onChange={this.activeRules}
              />
              Wanna Add Some Special RULES ?
            </label>
          </div>
          {rules && rules.length > 0 ? (
            rules.map((item, index) => {
              return (
                <p key={index} className="basicText text-center">
                  <FontAwesomeIcon
                    icon={faDotCircle}
                    size="sm"
                    color="#eaa300"
                  />
                  {item}
                </p>
              );
            })
          ) : (
            <></>
          )}
          {checkRules && (
            <>
              <div className="formInputDiv pb-1">
                <textarea
                  type="text"
                  className="formInput"
                  placeholder="Enter Your Own Rule "
                  onChange={this.getOneRule}
                  style={{ width: "250px" }}
                  rows="2"
                  value={this.state.oneRule}
                ></textarea>
              </div>
              <div className="text-center">
                <button onClick={this.addRule} className=" btn-simple">
                  Add Rule
                </button>
              </div>
            </>
          )}

          {errors && (
            <>
              <div className="errorDiv mt-2 mb-2">
                <div>{errors.tournamentName}</div>
                <div>{errors.organizerName}</div>
                <div>{errors.tournamentType}</div>
                <div>{errors.tournamentDetail}</div>
                <div>{errors.killPrize}</div>
                <div>{errors.topFraggerPrize}</div>
                <div>{errors.firstPrize}</div>
                <div>{errors.secondPrize}</div>
                <div>{errors.thirdPrize}</div>
                <div>{errors.regFee}</div>
                <div>{errors.rules}</div>
              </div>
            </>
          )}
          <div className="text-center mt-5">
            <div className="btn-outer mt-0 mb-4 " onClick={this.Submit}>
              <div className="btn-inner btn-small">
                <p className="btn-text">Create</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
