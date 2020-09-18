
import VisualDiff from 'react-visual-diff'



<VisualDiff
    left={<span>This is the left side</span>}
    right={<span>This is the left side</span>}
/>
    // <VisualDiff
    //     left={<span>This is the left side</span>}
    //     right={<span>This is the right side</span>}
    //     renderChange={({ type, children }) =>
    //         type === 'added'
    //             ? <Added>{children}</Added>
    //             : <Removed>{children}</Removed>}
    // />