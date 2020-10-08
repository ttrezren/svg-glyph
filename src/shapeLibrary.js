const shapeLibrary = type => {
  if (type === 1) {
    return `
        <line x1="5" y1="5" x2="15" y2="15" stroke="black" strokeWidth="1" />
        <line x1="5" y1="15" x2="15" y2="5" stroke="black" strokeWidth="1" />
      `
  } else if (type === 2) {
    return `<circle r="7" cx="10" cy="10" fill="white" stroke="black" />`
  } else if (type === 3) {
    return `<circle r="5" cx="10" cy="10" fill="black" />`
  } else return `<circle r="1" cx="10" cy="10" fill="black" />`
}

export default shapeLibrary
