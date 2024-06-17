// src/components/Presentation.js

import { Link } from 'react-router-dom';

export const Presentation = () => {
  return (
    <div className="h-[min(1150px,100vh)] flex flex-col lg:flex-row items-center justify-between">
      <div className="w-1/2 space-y-6">
        <p className="font-bold text-2xl">BOOST YOUR CAREER CASHING</p>
        <p className="font-extrabold text-5xl">
          Land your dram job
          <br />
          with already made
          <br />
          <span className="text-primary font-extrabold">
            Eye catchy Resumes.
          </span>
        </p>
        <p className="text-2xl">
          Create awesome resumes with one of our templates in just few seconds
        </p>
        <br />
        <Link to="/login">
          <button className="px-9 py-3 btn-primary">
            Create Resume for free
          </button>
        </Link>
      </div>
      <div className="w-1/2">
        <div
          className="h-[600px] w-[449px] float-end
          bg-[url(https://s3-alpha-sig.figma.com/img/b2d6/30b7/f60536a6dff20c0f4a19c1e19852a3bf?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RxPs2NP4z00YC91~QIbnTyLZe7NPjAtIrN8pscZy5HomGIFiHmv5KdwBut6d2~hyxx-fuIlP5CvANT92YEeNa7xIARfcmqWb9Rfmb1Q5UiNvcwcpJ88n6R-U7b-jhWyf7F5fqZnlsAqvAsqROkO4cSST9uBrCemzF3QPaQs457p70~bvDQjA8fSfsjIMLmd~dBMaYgROKPNkiP-bhPJC2ZNQY2ArGAzAttpEnbtW1Hh-A1cHMcUG2vxuLMxEMl1b8cxPP8yp-KNVDluRSc~JBsrF83oNh3JIyOo~Pa3Gz5MhOtgDKuETyAWfk4TQLv1coERT4huKeQZMfzppVAFgkg__)] bg-center bg-cover"
        ></div>
      </div>
    </div>
  );
};

