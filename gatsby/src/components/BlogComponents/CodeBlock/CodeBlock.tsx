import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import nightOwl from 'prism-react-renderer/themes/nightOwl';
import React from 'react';
import styled from 'styled-components';

const Pre = styled.pre`
  white-space: pre-wrap;
`;
export default ({ children, className }: {children: string, className: `language-${Language}`}) => {
  const language = className.replace(/language-/, '') as Language

  return (
      <Highlight  {...defaultProps} theme={nightOwl} code={children} language={language}>
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <Pre className={className} style={{...style, padding: '20px'}}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({line, key: i})}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({token, key})} />
              ))}
            </div>
          ))}
        </Pre>
      )}
    </Highlight>
  )
}