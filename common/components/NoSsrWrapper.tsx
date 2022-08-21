import dynamic from 'next/dynamic';

function NonSsrWrapper(props: any) {
  return <>{props.children}</>;
}

export default dynamic(() => Promise.resolve(NonSsrWrapper), {
  ssr: false,
});
