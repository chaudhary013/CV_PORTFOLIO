import React from 'react';
import { Button } from 'antd';

const ResumeDownload = () => {
  const downloadResume = () => {
    window.open('/newCVresume.pdf', '_blank');
  };

  return (
    <section className="p-10 text-center bg-slate-600">
      <Button type="primary" onClick={downloadResume}>Download My Resume</Button>
    </section>
  );
};

export default ResumeDownload;
