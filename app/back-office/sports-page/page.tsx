"use client";

import React, { useState } from "react";
import withAuth from "../../components/withAuth";
import Link from "next/link";
import { Modal } from "bootstrap/dist/js/bootstrap.bundle.js";
import NewsTable from "./NewsTable";

import "bootstrap/dist/js/bootstrap.bundle.js";
import "../../css/main-back-office.css";
import "../../css/main.css";

function SportsPage() {
  const [banner, setBanner] = useState({
    title: "",
    video: "",
  });

  const [scoreboard, setScoreboard] = useState({
    sportname: "",
    firstteam: "",
    secondteam: "",
    firstscore: "",
    secondscore: "",
    livelink: "",
  });

  function saveall_banner() {
    if (banner.title.length == 0) {
      alert("Please provide a title");
    } else if (banner.video.length == 0) {
      alert("Please provide a background video");
    } else {
      // CALL API
    }
  }

  function saveall_scoreboard() {
    if (scoreboard_list.length == 0) {
      alert("Please provide a Scorebaord");
    } else {
      // CALL API
    }
  }

  function add_scoreboard() {
    if (scoreboard.sportname.length == 0) {
      alert("Pleaes provide the sport's name");
    } else if (scoreboard.firstteam.length == 0) {
      alert("Please provide the first team's name");
    } else if (scoreboard.secondteam.length == 0) {
      alert("Please provide the second team's name");
    } else if (scoreboard.firstscore.length == 0) {
      alert("Please provide the first team's score");
    } else if (scoreboard.secondscore.length == 0) {
      alert("Please provide the second team's score");
    } else {
      const temp = { ...scoreboard, id: scoreboard_list.length + 1 };
      const temp_list = [...scoreboard_list];

      temp_list.push(temp);
      set_scoreboard_list(temp_list);
      const modalScoreboard = document.getElementById("scoreboardadd");
      Modal.getInstance(modalScoreboard).hide();

      setScoreboard({
        sportname: "",
        firstteam: "",
        secondteam: "",
        firstscore: "",
        secondscore: "",
        livelink: "",
      });
    }
  }

  const [scoreboard_list, set_scoreboard_list] = useState([
    {
      id: 1,
      sportname: "Basketball",
      firstteam: "panthers",
      secondteam: "phoenix",
      firstscore: "1",
      secondscore: "2",
      livelink:
        "https://www.youtube.com/embed/-4NCjjcF7y8?controls=0&rel=0&playsinline=1&enablejsapi=1&origin=https%3A%2F%2Fwww.rism.ac.th&widgetid=1",
    },
    {
      id: 2,
      sportname: "Basketball",
      firstteam: "panthers",
      secondteam: "phoenix",
      firstscore: "1",
      secondscore: "2",
      livelink:
        "https://www.youtube.com/embed/-4NCjjcF7y8?controls=0&rel=0&playsinline=1&enablejsapi=1&origin=https%3A%2F%2Fwww.rism.ac.th&widgetid=1",
    },
    {
      id: 3,
      sportname: "Basketball",
      firstteam: "panthers",
      secondteam: "phoenix",
      firstscore: "1",
      secondscore: "2",
      livelink:
        "https://www.youtube.com/embed/-4NCjjcF7y8?controls=0&rel=0&playsinline=1&enablejsapi=1&origin=https%3A%2F%2Fwww.rism.ac.th&widgetid=1",
    },
  ]);

  const [seasons_list, set_seasons_list] = useState([
    {
      id: 1,
      seasons: "Season 1",
      sports: [
        {
          id: 1,
          sport_title: "Sport1",
        },
        {
          id: 2,
          sport_title: "Sport2",
        },
        {
          id: 3,
          sport_title: "Sport3",
        },
      ],
    },
    {
      id: 2,
      seasons: "Season 2",
      sports: [
        {
          id: 4,
          sport_title: "Sport4",
        },
        {
          id: 5,
          sport_title: "Sport5",
        },
        {
          id: 6,
          sport_title: "Sport6",
        },
      ],
    },
    {
      id: 3,
      seasons: "Season 3",
      sports: [
        {
          id: 7,
          sport_title: "Sport7",
        },
        {
          id: 8,
          sport_title: "Sport8",
        },
        {
          id: 9,
          sport_title: "Sport9",
        },
      ],
    },
  ]);

  function update_scoreboard(event, key) {
    // key = title
    const sctemp = { ...scoreboard };
    sctemp[key] = event.target.value;
    setScoreboard(sctemp);
  }

  function update_banner(event, key) {
    // key = title
    const temp = { ...banner };
    temp[key] = event.target.value;
    setBanner(temp);
  }

  function delete_scoreboard(index) {
    const delscoreboard = scoreboard_list.filter(function (data, i) {
      return i != index;
    });
    set_scoreboard_list(delscoreboard);
  }

  function delete_season(index) {
    const temp = seasons_list.filter(function (data, i) {
      return i != index;
    });
    set_seasons_list(temp);
    //TODO remove news api
  }

  return (
    <div className="container">
      <div className="row">
        <div className="offset-2 col-8">
          <h2 className="my-4">Edit Sports Page</h2>
          {/* Banner Card */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="card">
                <h4 className="card-header bg-blue text-white">Banner</h4>
                <div className="card-body">
                  <div className="row">
                    <div className="col-12 mb-3">
                      <label htmlFor="" className="form-label">
                        Banner Title:{" "}
                      </label>
                      <input
                        value={banner.title}
                        onChange={(event) => update_banner(event, "title")}
                        type="text"
                        className="form-control"
                      />
                    </div>
                    <div className="col-12 mb-4">
                      <label htmlFor="" className="form-label">
                        Banner Video:{" "}
                      </label>
                      <input
                        value={banner.video}
                        onChange={(event) => update_banner(event, "video")}
                        type="file"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-12 text-end">
                      <button className="btn btn-blue" onClick={saveall_banner}>
                        SAVE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* News Card */}
          <NewsTable />

          {/* Scoresboard */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="card">
                <h4 className="card-header bg-blue text-white">Scoreboard</h4>
                <div className="card-body">
                  <div className="row">
                    <div className="col-12">
                      <div className="table-responsive">
                        <table className="table table-striped table-hover table-backoffice">
                          <thead>
                            <tr>
                              <th style={{ width: "100px" }}>Action</th>
                              <th>Sport Name</th>
                              <th>First Team</th>
                              <th>Second Team</th>
                              <th>First Team Score</th>
                              <th>Second Team Score</th>
                              <th>live link</th>
                            </tr>
                          </thead>
                          <tbody>
                            {scoreboard_list.map((data, index) => {
                              return (
                                <tr key={data.id}>
                                  <td>
                                    <i className="bi bi-pencil text-success me-2"></i>
                                    <i
                                      onClick={() => delete_scoreboard(index)}
                                      className="bi bi-trash3 text-danger"
                                    ></i>
                                  </td>
                                  <td>{data.sportname}</td>
                                  <td>{data.firstteam}</td>
                                  <td>{data.secondteam}</td>
                                  <td>{data.firstscore}</td>
                                  <td>{data.secondscore}</td>
                                  <td>
                                    <Link
                                      href={data.livelink}
                                      className="text-grey"
                                      target="_blank"
                                    >
                                      <u>Link to Live</u>
                                      <i className="bi bi-box-arrow-up-right text-grey ms-1"></i>
                                    </Link>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-6 text-start">
                      <button
                        type="button"
                        className="btn btn-success"
                        data-bs-toggle="modal"
                        data-bs-target="#scoreboardadd"
                      >
                        <i className="bi bi-plus-lg me-1 cvvv"></i>
                        Add scoreboard
                      </button>
                    </div>
                    <div
                      className="modal fade"
                      id="scoreboardadd"
                      tabIndex={-1}
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h1
                              className="modal-title fs-5"
                              id="exampleModalLabel"
                            >
                              Add Scoreboard
                            </h1>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                          </div>
                          <div className="modal-body">
                            <div className="row">
                              <div className="col-12 mb-3">
                                <label htmlFor="">
                                  Sport Name{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <input
                                  value={scoreboard.sportname}
                                  onChange={(event) =>
                                    update_scoreboard(event, "sportname")
                                  }
                                  className="form-control text-black text-roboto"
                                  type="text"
                                />
                              </div>
                              <div className="col-12 mb-3">
                                <label htmlFor="">
                                  First team{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <input
                                  value={scoreboard.firstteam}
                                  onChange={(event) =>
                                    update_scoreboard(event, "firstteam")
                                  }
                                  className="form-control  text-black text-roboto"
                                  type=""
                                />
                              </div>
                              <div className="col-12 mb-3">
                                <label htmlFor="">
                                  Second team{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <input
                                  value={scoreboard.secondteam}
                                  onChange={(event) =>
                                    update_scoreboard(event, "secondteam")
                                  }
                                  className="form-control text-black text-roboto"
                                  type="text"
                                />
                              </div>
                              <div className="col-12 mb-3">
                                <label htmlFor="">
                                  First Team Score{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <input
                                  value={scoreboard.firstscore}
                                  onChange={(event) =>
                                    update_scoreboard(event, "firstscore")
                                  }
                                  className="form-control text-black text-roboto"
                                  type="number"
                                />
                              </div>
                              <div className="col-12 mb-3">
                                <label htmlFor="">
                                  Second Team Score{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <input
                                  value={scoreboard.secondscore}
                                  onChange={(event) =>
                                    update_scoreboard(event, "secondscore")
                                  }
                                  className="form-control text-black text-roboto"
                                  type="number"
                                />
                              </div>
                              <div className="col-12 mb-3">
                                <label htmlFor="">Paste Link to Live</label>
                                <input
                                  value={scoreboard.livelink}
                                  onChange={(event) =>
                                    update_scoreboard(event, "livelink")
                                  }
                                  className="form-control text-black text-roboto"
                                  type="text"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button
                              type="button"
                              className="btn btn-blue"
                              onClick={add_scoreboard}
                            >
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-6 text-end">
                      <button
                        className="btn btn-blue"
                        onClick={saveall_scoreboard}
                      >
                        SAVE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Seasons */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="card">
                <h4 className="card-header bg-blue text-white">Seasons</h4>
                <div className="card-body">
                  <div className="row">
                    <div className="col-12">
                      <div className="table-responsive">
                        <table className="table table-striped table-hover table-backoffice">
                          <thead>
                            <tr>
                              <th style={{ width: "100px" }}>Action</th>
                              <th>Expand</th>
                              <th>Seasons</th>
                            </tr>
                          </thead>
                          <tbody>
                            {seasons_list.map((data, index) => {
                              return (
                                <>
                                  <tr key={data.id}>
                                    <td>
                                      <i className="bi bi-pencil text-success me-2"></i>
                                      <i
                                        onClick={() => delete_season(index)}
                                        className="bi bi-trash3 text-danger"
                                      ></i>
                                    </td>
                                    <td>
                                      <button
                                        className="btn btn-primary"
                                        data-bs-toggle="collapse"
                                        data-bs-target={"#sport-" + data.id}
                                      >
                                        expand
                                      </button>
                                    </td>
                                    <td>{data.seasons}</td>
                                  </tr>
                                  <div
                                    className="row collapse"
                                    id={"sport-" + data.id}
                                  >
                                    {data.sports.map((sp, sp_index) => {
                                      return (
                                        <div className="col-12" key={sp.id}>
                                          {sp.sport_title}
                                        </div>
                                      );
                                    })}
                                  </div>
                                </>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  {/*<div className="row mb-2">
                                        <div className="col-6 text-start">
                                            <button
                                                type="button"
                                                className="btn btn-success"
                                                data-bs-toggle="modal"
                                                data-bs-target="#seasonadd"
                                            >
                                                <i className="bi bi-plus-lg me-1 cvvv"></i>
                                                Add Season
                                            </button>
                                        </div>
                                        <div
                                            className="modal fade"
                                            id="seasonadd"
                                            tabIndex={-1}
                                            aria-labelledby="exampleModalLabel"
                                            aria-hidden="true"
                                        >
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h1
                                                            className="modal-title fs-5"
                                                            id="exampleModalLabel"
                                                        >
                                                            Add Season
                                                        </h1>
                                                        <button
                                                            type="button"
                                                            className="btn-close"
                                                            data-bs-dismiss="modal"
                                                            aria-label="Close"
                                                        />
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="row">
                                                            <div className="col-12 mb-3">
                                                                <label htmlFor="">
                                                                    Sport Name{" "}
                                                                    <span className="text-danger">
                                                                        *
                                                                    </span>
                                                                </label>
                                                                <input
                                                                    value={
                                                                        scoreboard.sportname
                                                                    }
                                                                    onChange={(
                                                                        event
                                                                    ) =>
                                                                        update_scoreboard(
                                                                            event,
                                                                            "sportname"
                                                                        )
                                                                    }
                                                                    className="form-control text-black text-roboto"
                                                                    type="text"
                                                                />
                                                            </div>
                                                            <div className="col-12 mb-3">
                                                                <label htmlFor="">
                                                                    First team{" "}
                                                                    <span className="text-danger">
                                                                        *
                                                                    </span>
                                                                </label>
                                                                <input
                                                                    value={
                                                                        scoreboard.firstteam
                                                                    }
                                                                    onChange={(
                                                                        event
                                                                    ) =>
                                                                        update_scoreboard(
                                                                            event,
                                                                            "firstteam"
                                                                        )
                                                                    }
                                                                    className="form-control  text-black text-roboto"
                                                                    type=""
                                                                />
                                                            </div>
                                                            <div className="col-12 mb-3">
                                                                <label htmlFor="">
                                                                    Second team{" "}
                                                                    <span className="text-danger">
                                                                        *
                                                                    </span>
                                                                </label>
                                                                <input
                                                                    value={
                                                                        scoreboard.secondteam
                                                                    }
                                                                    onChange={(
                                                                        event
                                                                    ) =>
                                                                        update_scoreboard(
                                                                            event,
                                                                            "secondteam"
                                                                        )
                                                                    }
                                                                    className="form-control text-black text-roboto"
                                                                    type="text"
                                                                />
                                                            </div>
                                                            <div className="col-12 mb-3">
                                                                <label htmlFor="">
                                                                    First Team
                                                                    Score{" "}
                                                                    <span className="text-danger">
                                                                        *
                                                                    </span>
                                                                </label>
                                                                <input
                                                                    value={
                                                                        scoreboard.firstscore
                                                                    }
                                                                    onChange={(
                                                                        event
                                                                    ) =>
                                                                        update_scoreboard(
                                                                            event,
                                                                            "firstscore"
                                                                        )
                                                                    }
                                                                    className="form-control text-black text-roboto"
                                                                    type="number"
                                                                />
                                                            </div>
                                                            <div className="col-12 mb-3">
                                                                <label htmlFor="">
                                                                    Second Team
                                                                    Score{" "}
                                                                    <span className="text-danger">
                                                                        *
                                                                    </span>
                                                                </label>
                                                                <input
                                                                    value={
                                                                        scoreboard.secondscore
                                                                    }
                                                                    onChange={(
                                                                        event
                                                                    ) =>
                                                                        update_scoreboard(
                                                                            event,
                                                                            "secondscore"
                                                                        )
                                                                    }
                                                                    className="form-control text-black text-roboto"
                                                                    type="number"
                                                                />
                                                            </div>
                                                            <div className="col-12 mb-3">
                                                                <label htmlFor="">
                                                                    Paste Link
                                                                    to Live
                                                                </label>
                                                                <input
                                                                    value={
                                                                        scoreboard.livelink
                                                                    }
                                                                    onChange={(
                                                                        event
                                                                    ) =>
                                                                        update_scoreboard(
                                                                            event,
                                                                            "livelink"
                                                                        )
                                                                    }
                                                                    className="form-control text-black text-roboto"
                                                                    type="text"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button
                                                            type="button"
                                                            className="btn btn-secondary"
                                                            data-bs-dismiss="modal"
                                                        >
                                                            Close
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="btn btn-blue"
                                                            onClick={
                                                                add_scoreboard
                                                            }
                                                        >
                                                            Save changes
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-6 text-end">
                                            <button
                                                className="btn btn-blue"
                                                onClick={saveall_scoreboard}
                                            >
                                                SAVE
                                            </button>
                                        </div>
                                    </div>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuth(SportsPage);
