import React from 'react';
import styles from './CohortDetails.module.css';

// Exercise 5: HOL - CSS Modules applied to CohortDetails component
function CohortDetails({ cohort }) {
  const headingStyle = {
    color: cohort.status === 'ongoing' ? 'green' : 'blue'
  };

  return (
    <div className={styles.box}>
      <h3 style={headingStyle}>{cohort.code} — {cohort.name}</h3>
      <dl>
        <dt>Trainer</dt>
        <dd>{cohort.trainer}</dd>
        <dt>Start Date</dt>
        <dd>{cohort.startDate}</dd>
        <dt>End Date</dt>
        <dd>{cohort.endDate}</dd>
        <dt>Status</dt>
        <dd style={{ color: cohort.status === 'ongoing' ? 'green' : 'blue', fontWeight: 'bold' }}>
          {cohort.status.toUpperCase()}
        </dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
