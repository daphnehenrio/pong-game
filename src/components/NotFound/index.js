// ? Import npm
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

// ? Import actions
import { actionChangePage } from '../../actions';

// ? Import styles
import './styles.scss';

// ? Composant
const NotFound = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(actionChangePage('/', navigate));
  };

  return (
    <div className="notFoundContainer">
      <div className="notfound">
        <div className="centered"><span className="inverted">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;</div>
        <div className="centered"><span className="inverted">&nbsp;4&nbsp;0&nbsp;4&nbsp;</span><span className="shadow">&nbsp;</span></div>
        <div className="centered"><span className="inverted">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="shadow">&nbsp;</span></div>
        <div className="centered">&nbsp;<span className="shadow">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
        <div className="row">&nbsp;</div>
        <div className="row">A fatal exception 404 has occurred at C0DE:ABAD1DEA in 0xC0DEBA5E.</div>
        <div className="row">The current request will be terminated.</div>
        <div className="row">&nbsp;</div>
        <div className="row">* Press any key to return to the previous page.</div>
        <div className="row">* Press CTRL+ALT+DEL to restart your computer. You will</div>
        <div className="row">&nbsp;&nbsp;lose any unsaved information in all applications.</div>
        <div className="row">&nbsp;</div>
        <div className="centered">Click home to continue...<span className="blink">&#9608;</span></div>
        <div className="centered"><button type="button" onClick={handleClick}>Home</button></div>
      </div>
    </div>
  );
};

// ? Export
export default NotFound;
