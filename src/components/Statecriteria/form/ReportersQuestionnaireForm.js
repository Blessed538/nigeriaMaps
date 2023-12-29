import { Formik } from "formik";
import React, { Component } from "react";
import DropdownFormItem from "components/FormItems/items/DropdownFormItem";
import RadioFormItem from "components/FormItems/items/RadioFormItem";
import usersFields from "../reportersField";
import IniValues from "components/FormItems/iniValues";
import PreparedValues from "components/FormItems/preparedValues";
import FormValidations from "components/FormItems/formValidations";
import Widget from "components/Widget";
import { Label } from "reactstrap";
import { createReport } from "../../../actions/reports";
import { connect } from "react-redux";
import { toast } from "react-toastify";

class ReportersQuestionnaireForm extends Component {
  constructor(props) {
    super(props);
    this.selectRef = React.createRef();
    this.prevSelectedValue = null;
  }

  iniValues = () => {
    return IniValues(usersFields, {});
  };

  formValidations = () => {
    return FormValidations(usersFields, {});
  };

  handleSubmit = async (values) => {
    console.log({ values });
    try {
      const { data } = PreparedValues(usersFields, values || {});
      console.log({ data });
      this.props.dispatch(createReport(values));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  renderForm() {
    return (
      <Widget>
        <Formik
          onSubmit={this.handleSubmit}
          initialValues={this.iniValues()}
          validationSchema={this.formValidations()}
          render={(form) => {
            return (
              <form onSubmit={form.handleSubmit}>
                <Label className="col-form-label-lg mt-3">Select a State</Label>
                <DropdownFormItem name={"state"} schema={usersFields} />

                <Label className="col-form-label-lg mt-3">
                  State budget allocation to ICT development
                </Label>
                <DropdownFormItem name={"ictFund"} schema={usersFields} />

                <RadioFormItem
                  name={"percentageOfBudget"}
                  schema={usersFields}
                />
                <DropdownFormItem
                  name={"presenceOfIctProjects"}
                  schema={usersFields}
                />
                <Label className="col-form-label-lg mt-3">
                  Governance systems
                </Label>
                <RadioFormItem name={"ictMinistry"} schema={usersFields} />
                <RadioFormItem name={"stateIctPolicy"} schema={usersFields} />
                <DropdownFormItem
                  name={"officialMailUse"}
                  schema={usersFields}
                />

                <Label className="col-form-label-lg mt-3">
                  Internet availability and speed
                </Label>
                <RadioFormItem
                  name={"officialInternetProvision"}
                  schema={usersFields}
                />
                <DropdownFormItem
                  name={"officialInternetSpeed"}
                  schema={usersFields}
                />
                <DropdownFormItem
                  name={"videoConferenceUse"}
                  schema={usersFields}
                />

                <RadioFormItem name={"intranetUse"} schema={usersFields} />

                <Label className="col-form-label-lg mt-3">
                  Level of ICT reforms/advancement in the following sectors
                </Label>
                <RadioFormItem name={"ict4Learning"} schema={usersFields} />
                <RadioFormItem
                  name={"ict4HealthRecords"}
                  schema={usersFields}
                />
                <RadioFormItem
                  name={"presenceofTelemedicine"}
                  schema={usersFields}
                />
                <DropdownFormItem
                  name={"digitizedLandRecords"}
                  schema={usersFields}
                />
                <DropdownFormItem
                  name={"digitizedJudiciary"}
                  schema={usersFields}
                />
                <RadioFormItem name={"digitizedAgric"} schema={usersFields} />
                <RadioFormItem
                  name={"ecommerceIncentives"}
                  schema={usersFields}
                />

                <Label className="col-form-label-lg mt-3">
                  Deployment of computer systems in state secretariat
                </Label>

                <DropdownFormItem
                  name={"stateIctSystemDeploment"}
                  schema={usersFields}
                />

                <RadioFormItem
                  name={"stateITDepartment"}
                  schema={usersFields}
                />
                <RadioFormItem name={"digitizedFiling"} schema={usersFields} />

                <RadioFormItem
                  name={"cyberSecurityInfra"}
                  schema={usersFields}
                />

                <Label className="col-form-label-lg mt-3">
                  Startup Ecosystem
                </Label>

                <RadioFormItem name={"startupDb"} schema={usersFields} />
                <DropdownFormItem
                  name={"startupInvestmentVolume"}
                  schema={usersFields}
                />

                <DropdownFormItem
                  name={"startUpDirectJobs"}
                  schema={usersFields}
                />

                <Label className="col-form-label-lg mt-3">
                  Status of State Official Website
                </Label>

                <DropdownFormItem
                  name={"stateWebsiteFunctionality"}
                  schema={usersFields}
                />

                <DropdownFormItem
                  name={"stateWebsiteUI"}
                  schema={usersFields}
                />

                <DropdownFormItem
                  name={"stateWebsiteSecurity"}
                  schema={usersFields}
                />

                <Label className="col-form-label-lg mt-3">
                  Staff ICT proficiency
                </Label>
                <RadioFormItem name={"iCTUpskill"} schema={usersFields} />

                <RadioFormItem
                  name={"certifiedITPersonnel"}
                  schema={usersFields}
                />

                <div className="form-buttons mt-4">
                  {/* <button
                    className="btn btn-primary me-3"
                    // disabled={saveLoading}
                    type="button"
                    onClick={form.handleSubmit}
                  >
                    Save
                  </button> */}
                  {/* <button
                    className="btn btn-light me-3"
                    type="button"
                    onClick={form.handleReset}
                  >
                    Edit
                  </button> */}
                  <button
                    className="btn btn-light"
                    type="button"
                    onClick={form.handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </form>
            );
          }}
        />
      </Widget>
    );
  }

  render() {
    return this.renderForm();
  }
}

export default connect()(ReportersQuestionnaireForm);
