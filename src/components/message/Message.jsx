import './message.css';
function Message({ message, own }) {
    return (
        <div className={"message"} id={own ? "own" : ""}>
            <div className="messageTop">
                <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAB6CAMAAABHh7fWAAAAY1BMVEX///8AAAAmJibo6Oja2toMDAyLi4vh4eH5+fmbm5tKSkrNzc1zc3MRERG5ubnIyMjz8/OFhYWVlZVVVVV9fX0uLi7BwcE9PT3U1NRDQ0NPT08fHx+lpaU1NTWxsbFbW1toaGjVBCOeAAACpklEQVRoge2a63qqMBBFCSggF8UbWO/v/5TnQw6tFpXMni38aNYDdH0NcTLZE89Tki7NQvs3ECargzGHYHBvcE5MTTawN95lvmkIBxUXx8R8cx1QvLiaB84DeeOzb35z3Q0gjpYd7418U352n6eX5+LGXq3SeAxxQxVGHxAHWa/4RkZf+NJOXDPnmo/2ZmNWTPNMYqa65zIzscgEB6k6Z+21jdRMO82iqVxtOL9v4R5rmFHUSb+oS8IwF92TygK/IKijHFHnjI89QXaZMROn/ivqqVM7tVM7tVM79VhqrEFiqHeI2RhGxvEiwuiDEGlBXXiNuhNfoGajjk5TXJ0q1QWuVt8/cLXW7PUnVi+4qNXQFbdGH6gIUqtH9BlWhKoJV03s3kPYZZ73hZm/COoQUy8JanFe18BISkcMNLw1ol4zzNiKc5LpAEivfFJICpRxfQFvAH5erIkf0KmUJHUgV7Py8HgvNe9pAy/xmc2JpGvEBydx0CYcQWx4ZulGow74RF+b96VvCO4/lNnDHfZjnyl9mLu1VW/Z5hHVhfVw8cCY9dwz4rcWxBrs5xqC+w/rwGwRNGjkBwOSFwNHslrQJLGfQwluXozb1h2iFxrMFY9PErMxJ96DIHE3TPvchXX9bqEMzmuA2E4b17VYPny6h/Q4pKjk6oqz4lBMSlnxCLva64/OAHgF1LDRtcRBCAUpDXmIy4sZ9BrmB38G7rajuJJ02SL1fE4Q3+TSzqEUHhjvOEk6pgU85nlOYjuBmcDB/2suNsO+CKjYNmR9NQavIP28rTExGEDbEr7sXuAJiz3Pb/2izg+nW2OevHX/EP7j09oS6AZwqp8aE0AnsoZ1u9kHN38PCZCoXcv/qN6pndqpndqplWpPPMbSs28PzQ90v++51P/0Pzn3LUYcCVcrAAAAAElFTkSuQmCC' alt='friendImg' className="messageImg" />
                <p className="messageText">{message?.text}</p>
            </div>
        </div>
    )
}

export default Message;