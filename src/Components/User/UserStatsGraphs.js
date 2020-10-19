import React from 'react';
import styles from './UserStatsGraphs.module.css';
import { VictoryBar, VictoryChart, VictoryPie } from 'victory';

const UserStatsGraphs = ({ data }) => {
  const [total, setTotal] = React.useState(0);

  const graphData = data.map((item) => {
    return {
      x: item.title,
      y: Number(item.acessos),
    };
  });
  React.useEffect(() => {
    if (data.length > 0)
      setTotal(
        data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b),
      );
  }, [data]);

  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={`${styles.total} ${styles.graphItem}`}>
        <p>Acessos: {total}</p>
      </div>
      <div className={`${styles.graphItem}`}>
        {' '}
        <VictoryPie
          data={graphData}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              opacity: 0.9,
              stroke: '#fff',
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: '#333',
            },
          }}
        />
      </div>
      <div className={`${styles.graphItem}`}>
        <VictoryChart>
          <VictoryBar alignment="start" data={graphData}></VictoryBar>
        </VictoryChart>
      </div>
    </section>
  );
};

export default UserStatsGraphs;
