describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
    submitServerInfo();
  });


  it('should add a new server to allServers on submitServerInfo()', function () {
    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });


  it('should add new server to server table', function (){
    expect(document.querySelector('#servers > tr > td').innerText).toEqual("Alice");
  });

  
  it('should create a delete button', function (){
    expect(document.querySelector('.delete').innerText).toEqual("X");
  });

  
  afterEach(function() {
    let serverRows = document.querySelectorAll('#servers > tr');
    for (let server of serverRows){
      server.remove();
      allServers = {};
    }
  });
});
