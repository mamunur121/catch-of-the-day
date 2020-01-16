import React from "react";

class Header extends React.Component {
  render() {
    const {tagline} = this.props;
    return (
        <header className="top">
          <h1>
            Catch
            <span className="ofThe">
        <span className="of">Of</span>
        <span className="the">The</span>
      </span>
            Day
          </h1>
          <h3 className="tagline">
            <span>{tagline}</span>
          </h3>
        </header>
    )
  }

}

export default Header;