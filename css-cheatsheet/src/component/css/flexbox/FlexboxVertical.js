const FlexBoxVertical = _ => {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
      }}
    >
      {/* 11111 */}
      <div
        style={{
          // display: 'flex',
          // flexFlow: 'column',
          // height: '100%'
        }}
      >
        <header
          style={{
            backgroundColor: 'red',
            // flexGrow: '1'
            // flex: '0 0 4rem',
            height: '4rem',
            position: 'sticky',
            zIndex: '100',
            top: '0px',
            minWidth:'600px'
          }}
        >
          111
        </header>
        <session
          style = {{
            // flexGrow: '1'
            // flex: '1 0 700px',
            // overflow: 'scroll',
            display: 'flex',
            // position: 'sticky',
            // top: '67px',
            
          }}
        >
          <nav
            style = {{
              backgroundColor: 'green',
              flex: '0 0 250px',
              position: 'sticky',
              top: '4rem',
              height: 'calc(100vh - 4rem)',
              overflowY: 'auto'
            }}
          >
            <h1>2222</h1>
            <h1>2222</h1>
            <h1>2222</h1>
            <h1>2222</h1>
            <h1>2222</h1>
            <h1>2222</h1>
            <h1>2222</h1>
            <h1>2222</h1>
            <h1>2222</h1>
            <h1>2222</h1>
            <h1>2222</h1>
            <h1>2222</h1>
            <h1>2222</h1>
            <h1>2222</h1>
            <h1>2222</h1>
            <h1>2222</h1>
            <h1>2222</h1>
            <h1>2222</h1>
            <h1>2222</h1>
            <h1>2222</h1>
            <h1>2222</h1>
            <h1>2222</h1>
            <h1>2222</h1>
            <h1>2222</h1>
          </nav>
          <main
            style={{
              backgroundColor: 'blue',
              // overflow: 'scroll',
              flex: '1 0 350px', 
            }}
          >
            <h1>%%%%%</h1>
            <h1>111</h1>
            <h1>111</h1>
            <h1>111</h1>
            <h1>111</h1>
            <h1>111</h1>
            <h1>111</h1>
            <h1>111</h1>
            <h1>111</h1>
            <h1>111</h1>
            <h1>111</h1>
            <h1>111</h1>
            <h1>111</h1>
            <h1>111</h1>
            <h1>111</h1>
            <h1>111</h1>
            <h1>111</h1>
            <h1>111</h1>
            <h1>111</h1>
            <h1>111</h1>
            <h1>111</h1>
            <h1>111</h1>
            <h1>111</h1>
            <h1>111</h1>
            <h1>111</h1>
          </main>
        </session>
      </div>
    </div>
  )
}

export default FlexBoxVertical