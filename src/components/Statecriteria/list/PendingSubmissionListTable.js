import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { push } from "connected-react-router";
import {
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import Widget from "components/Widget";
import s from "../Users.module.scss";
import dummyStates from "./dummyStateData";
import actions from "../../../actions/usersListActions";
import { getReports } from "../../../actions/reports";
import { useSelector } from "react-redux";
import { reportActions } from "../../../actions/reports";

const PendingSubmissionListTable = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [reportToDelete, setReportToDelete] = useState(null);
  const reports = useSelector((state) => state.reports.reports);
  const dispatch = useDispatch();

  console.log(reports, "reports");

  const handlePublishReport = () => {
    dispatch(reportActions(reportToDelete, "publish"));
    setTimeout(() => {
      setModalOpen(false);
    }, 1000);
  };

  const openModal = (cell) => {
    setModalOpen(true);
    setReportToDelete(cell);
    props.dispatch(actions.doOpenConfirm(cell));
  };

  const closeModal = () => {
    props.dispatch(actions.doCloseConfirm());
  };

  const actionFormatter = (cell) => (
    <div className={`d-flex justify-content-between`}>
      <Button
        className={s.controBtn}
        color="info"
        onClick={() => props.dispatch(push(`/app/report/${cell}`))}
      >
        View
      </Button>
      <Button
        className={s.controBtn}
        color="danger"
        onClick={() => props.dispatch(push(`/app/report/${cell}/edit`))}
      >
        Edit
      </Button>
      <Button
        className={s.controBtn}
        color="success"
        onClick={() => openModal(cell)}
      >
        Publish
      </Button>
    </div>
  );

  useEffect(() => {
    // const { dispatch } = props;
    fetchReport();
  }, []);

  const fetchReport = () => {
    try {
      dispatch(getReports());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Widget title="Penetration Submission">
        <div className={s.usersTableWrapper}>
          <BootstrapTable
            bordered={false}
            data={reports}
            version="4"
            tableContainerClass={`table-responsive table-striped table-hover ${s.usersListTableMobile}`}
          >
            <TableHeaderColumn dataField="state" dataSort>
              <span className="fs-sm">State</span>
            </TableHeaderColumn>

            <TableHeaderColumn dataField="nameOfOfficer" dataSort>
              <span className="fs-sm">Name of Officer</span>
            </TableHeaderColumn>

            <TableHeaderColumn dataField="status" dataSort>
              <span className="fs-sm">Status</span>
            </TableHeaderColumn>

            <TableHeaderColumn dataField="createdAt" dataSort>
              <span className="fs-sm">Submitted On</span>
            </TableHeaderColumn>

            <TableHeaderColumn dataField="publishedBy" dataSort>
              <span className="fs-sm">Published By</span>
            </TableHeaderColumn>

            <TableHeaderColumn dataField="publishedOn" dataSort>
              <span className="fs-sm">Published On</span>
            </TableHeaderColumn>

            <TableHeaderColumn
              isKey
              dataField="id"
              dataFormat={actionFormatter}
            >
              <span className="fs-sm">Actions</span>
            </TableHeaderColumn>
          </BootstrapTable>
        </div>
      </Widget>

      <Modal size="sm" isOpen={modalOpen} toggle={() => setModalOpen(false)}>
        <ModalHeader toggle={() => setModalOpen(false)}>
          Confirm Publish
        </ModalHeader>
        <ModalBody>Are you sure you want to publish this report?</ModalBody>
        <ModalFooter>
          <Button color="default" onClick={() => setModalOpen(false)}>
            Cancel
          </Button>
          <Button color="primary" onClick={() => handlePublishReport()}>
            Publish
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

function mapStateToProps(store) {
  return {
    loading: store.users.list.loading,
    rows: store.users.list.rows,
    modalOpen: store.users.list.modalOpen,
    idToDelete: store.users.list.idToDelete,
  };
}

export default connect(mapStateToProps)(PendingSubmissionListTable);
