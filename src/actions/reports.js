import axios from "axios";
import { toast } from "react-toastify";
import { push } from "connected-react-router";
import { GET_REPORT } from "../reducers/reports";
export const REPORT_REQUEST = "REPORT_REQUEST";
export const REPORT_SUCCESS = "REPORT_SUCCESS";
export const REPORT_AVAILBILITY = "REPORT_AVAILBILITY";
export const REPORT_FAILURE = "REPORT_FAILURE";

function requestReport() {
  return {
    type: REPORT_REQUEST,
  };
}

export function receiveReport(payload) {
  return {
    type: REPORT_SUCCESS,
    payload,
  };
}

export function reportError(payload) {
  return {
    type: REPORT_FAILURE,
    payload,
  };
}

export function createReport(payload) {
  return (dispatch) => {
    dispatch(requestReport());
    const creds = payload;

    axios
      .post("/report/create-report-data", creds)
      .then((res) => {
        if (res.status) {
          // dispatch(receiveReport());
          toast.success(res.message);
          dispatch(push("/app/report/pending"));
        }
      })
      .catch((err) => {
        // dispatch(reportError(err.message));
        toast.error(err.message);
      });
  };
}

export function getReports() {
  return (dispatch) => {
    dispatch(requestReport());

    axios
      .get("/report/get-reports")
      .then((res) => {
        console.log(res.data, "from get reports");
        if (res.status) {
          dispatch(receiveReport(res.data));
        }
      })
      .catch((err) => {
        console.log({ err });
        // dispatch(reportError(err.response.data));
        // toast.error(err.response.message);
      });
  };
}

export function reportActions(id, action) {
  return (dispatch) => {
    dispatch(requestReport());

    axios
      .post(`/report/actions/${id}`, { action: action })
      .then((res) => {
        console.log(res.data, "from the reportActions");
        if (res.data.status) {
          dispatch({
            type: GET_REPORT,
            payload: res.data.data,
          });

          // dispatch(push("/app/report/pending"));
          toast.success(res.message);
        }
      })
      .catch((err) => {
        dispatch(reportError(err.response.data));
        toast.error(err.response.message);
      });
  };
}

export function updateReport(id, values) {
  return (dispatch) => {
    dispatch(requestReport());

    axios
      .patch(`/report/update-report-data/${id}`, values)
      .then((res) => {
        if (res.data.status) {
          dispatch(receiveReport(res.data));
          toast.success(res.data.message);
          // dispatch(push("/app/report/pending"));
        } else if (!res.data.status) {
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        // dispatch(reportError(err.response.data));
        // toast.error(err.response.message);
      });
  };
}
export function checkReportState() {
  return (dispatch) => {
    dispatch(requestReport());

    axios
      .get("/report/get-reports")
      .then((res) => {
        //
        if (res.response.status) {
          dispatch({
            type: REPORT_AVAILBILITY,
            payload: res.response.data,
          });
        }
      })
      .catch((err) => {
        dispatch(reportError(err.response.data));
        toast.error(err.response.message);
      });
  };
}
