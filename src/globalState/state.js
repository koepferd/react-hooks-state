import * as React from 'react';
import { StoveTempProvider } from './StoveTempProvider';

function ProviderComposer({ contexts, children }) {
    return contexts.reduceRight(
		(children, parent) =>
			React.cloneElement(parent, {
				children: children,
			}),
			children
		);
    }
  
function ContextProvider({ children }) {
    return (
        <ProviderComposer
            contexts={[
                <StoveTempProvider />,
            ]}
        >
            {children}
        </ProviderComposer>
    );
  }
  
export { ContextProvider };