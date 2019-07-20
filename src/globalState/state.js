import * as React from 'react';
import { StoveTempProvider } from './StoveTempProvider';
import { WaterStatusProvider } from './WaterStatusProvider';
import { ChefStatusProvider } from './ChefStatusProvider';

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
				<WaterStatusProvider />,
				<ChefStatusProvider />
            ]}
        >
            {children}
        </ProviderComposer>
    );
  }
  
export { ContextProvider };