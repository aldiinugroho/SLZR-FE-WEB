export function styleTruncate(maxLine = 1) {
  return {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: maxLine, // Use WebkitLineClamp instead of -webkit-line-clamp
    WebkitBoxOrient: 'vertical',
  }
}