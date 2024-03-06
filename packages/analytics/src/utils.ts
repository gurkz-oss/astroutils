/**
 * use this to see if view transitions are currently enabled
 * @internal
 * @returns if using view transitions
 */
const _usingViewTransitions = () => {
	const viewTransitionsMetaElem = document.head.querySelector("meta[name='astro-view-transitions-enabled']");
	if (!viewTransitionsMetaElem) return false;
	return true;
};

const usingViewTransitions = _usingViewTransitions();

export { usingViewTransitions };
