import React from 'react';

type Props = {
  clockName: string;
  today: string;
};

export class Clock extends React.Component<Props> {
  render() {
    const { clockName, today } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">{today}</span>
      </div>
    );
  }
}
