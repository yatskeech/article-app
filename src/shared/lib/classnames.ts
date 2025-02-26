type ClassName = string | Record<string, boolean>;

export function classnames(...classNames: ClassName[]) {
  return classNames.reduce((resultClassNames, className) => {
    if (typeof className === 'string') {
      resultClassNames.push(className);
      return resultClassNames;
    }

    Object.entries(className).forEach(([className, isActive]) => {
      if (isActive) resultClassNames.push(className);
    })

    return resultClassNames;
  }, []).join(' ');
}
