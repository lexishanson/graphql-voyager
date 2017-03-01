import * as React from "react";

import './doc-panel.css';

import TitleArea from '../TitleArea/TitleArea';
import TypeDoc from '../DocExplorer/TypeDoc';
import ExtraTypeInfo from '../DocExplorer/ExtraTypeInfo';

export default class DocPanel extends React.Component<void, void> {

  render() {
    return (
      <div className="doc-panel">
        <div className="contents">
          <TitleArea/>
          <TypeDoc/>
        </div>
        <ExtraTypeInfo/>
      </div>
    )
  }
}