const Hit = ({ showHit }: { showHit: boolean }) => {
  let classes = '';

  if (showHit) {
    classes += 'prose prose-xl text-red-500 animate-pulse';
  } else {
    classes += 'invisible';
  }

  return <div className={ classes }>You have hit a bomb start over!</div>;
};

export default Hit;