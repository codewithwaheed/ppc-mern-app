import { faDotCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";

export default class SingleTournamentRules extends Component {
  render() {
    const { data } = this.props;
    var dataArr = [
      "Players Should enter room in the given time",
      "Only players above the age of 13 are allowed to participate",
      "All games are played on PUBG Mobile, the mobile version only. No emulators and iPads.",
      "A custom room will be created on tournament day. Only the team leader and his registered teammates will have to join that room. ID and Password of the room will be shared with team leader via WhatsApp/Email 15 minutes before the match starts. Failure to join the custom room on time will be treated as a ‘no show’.",
      "Please download all maps and be ready, if you don’t have the map, the match will be started without you. No refunds will be issued if you are kicked from the server due to glitches or otherwise.",
      "Hackers will be disqualified instantly. As soon as we suspect a player to be hacking, the team will be disqualified. The player or team will have to show video proof that they aren’t cheating. If suspected players are unable to provide proof, admins reserve the right to disqualify the player and the team. We recommend players to record their perspectives for tournaments and custom rooms just in case a discrepency arises",
      " Stay in your given slots, joining any other slot will get you kicked & the team will be disqualified. If you have anyone else in your slot, reach out to us in discord on the help channel immediately before the match starts. Jumping from slots repeatedly will result in a ban.",
      "Players have to follow the guidelines given by admins or else risk getting banned. Players and teams who have been banned can appeal their bans but the rights to unban is reserved by Orgnizer and it’s admin team.",
      "In case of any technical issues from the organizer side, matches can be rescheduled. Players must agree to the new rescheduled time",
      "UNREGISTERED PLAYERS will not be entertained in tournaments, and could result in a team ban or player ban. Do not bring random friends into tournaments.",
      "We have a lot of spectators watching to ensure cheating doesn’t take place in the tournaments.",
      "Orgnizer Team reserves all rights to change the match timings and rules if required.",
    ];
    if (data.rules && data.rules.length > 0)
      dataArr = [...data.rules, ...dataArr];
    console.log(dataArr);
    return (
      <div className="formContainer p-5">
        {dataArr.map((item, index) => {
          return (
            <p key={index} className="basicText">
              <FontAwesomeIcon
                className="mr-2"
                icon={faDotCircle}
                size="sm"
                color="#eaa300"
              />
              {item}
            </p>
          );
        })}
      </div>
    );
  }
}
