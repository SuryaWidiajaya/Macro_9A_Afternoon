import React, { useState } from 'react';
import Layout from '../../component/Layout/Layout';
import { Link } from 'react-router-dom';

function ProfileForum() {
  const groups = ['Group Forum 1', 'Group Forum 2', 'Group Forum 3', 'Group Forum 4', 'Group Forum 5'];

  const [activeGroup, setActiveGroup] = useState(groups[0]);

  const [messages, setMessages] = useState({
    'Group Forum 1': [
      { sender: 'iChoice', text: 'Hello, Selamat Datang di Group Forum 1', align: 'left' },
      { sender: 'Pengguna', text: 'Mau voting Siapa nih kalian?', align: 'left' },
      { sender: 'Kandidat 3', text: 'Jika Saya Terpilih Maka BBM Turun!!!', align: 'left' },
      { sender: 'Pengguna', text: 'Kamu Lucu, Saya pilih!', align: 'left' },
    ],
    'Group Forum 2': [
      { sender: 'iChoice', text: 'Hello, Selamat Datang di Group Forum 2', align: 'left' },
      { sender: 'Kandidat 2', text: 'Piliih Aku Ya!!!', align: 'left' },
      { sender: 'iChoice', text: '231 Orang Sudah melakukan Voting!', align: 'left' },
    ],
    'Group Forum 3': [
      { sender: 'iChoice', text: 'Hello, Selamat Datang di Group Forum 3', align: 'left' },
      { sender: 'Kandidat 1', text: 'Pilih Aku Maka BBM Gratis!!!', align: 'left' },
    ],
    'Group Forum 4': [
      { sender: 'iChoice', text: 'Hello, Selamat Datang di Group Forum 4', align: 'left' },
      { sender: 'Ketua Kelas', text: 'Enaknya Makan Dimana ya?', align: 'left' },
    ],
    'Group Forum 5': [
      { sender: 'iChoice', text: 'Hello, Selamat Datang di Group Forum 5', align: 'left' },
      { sender: 'Pengguna', text: 'Aku Golput Kali ya?', align: 'left' },
    ],
  });


  const [messageInput, setMessageInput] = useState('');

  const sendMessage = () => {
    if (messageInput.trim() !== '') {
      const newMessage = { text: messageInput, sender: 'You' };
      setMessages({ ...messages, [activeGroup]: [...messages[activeGroup], newMessage] });
      setMessageInput('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  const handleGroupClick = (group) => {
    setActiveGroup(group);


  };

  return (
    <>
      <Layout hide="">
        <div className="flex">
          <div className="bg-[#1F298D] text-white w-1/4 h-screen">
            <div className="p-4">
              {/* <h1 className="text-2xl font-semibold mb-4">Group Forum</h1> */}
              <ul className="space-y-2">
                {groups.map((group) => (
                  <li
                    key={group}
                    className={`p-2 rounded relative ${group === activeGroup ? 'bg-[#7B84E3]' : 'hover:bg-[#7B84E3]'
                      }`}
                  >
                    <a
                      href="#"
                      className="flex items-center space-x-2"
                      onClick={() => handleGroupClick(group)}
                    >
                      <div className={`w-8 h-8 rounded-full bg-${group.toLowerCase()}-500`}></div>
                      <span className="group-text">{group}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-3/4 h-auto">
            <div className="flex flex-col h-screen">
              <div className="bg-white rounded-lg p-4 overflow-y-scroll flex-1" id="chat-box">
                {messages[activeGroup].map((message, index) => (
                  <div
                    key={index}
                    className={`mb-2 flex flex-col ${message.sender === 'You' ? 'items-end' : 'items-start'
                      }`}
                  >
                    {message.sender !== 'You' && (
                      <div className="text-gray-500">
                        <img
                          src="/static/media/profil.7f887042182cfbcbd4b3.png"
                          alt={message.sender}
                          className="w-8 h-8 rounded-full inline-block mt-2"
                        />
                        {message.sender}
                      </div>
                    )}
                    {message.sender === 'You' && (
                      <div className="text-gray-500 ml-2">
                        You
                        <img
                          src="/static/media/profil.7f887042182cfbcbd4b3.png"
                          alt="You"
                          className="w-8 h-8 rounded-full inline-block mt-2"
                        />
                      </div>
                    )}
                    <div
                      className={`rounded-lg p-2 ${message.sender === 'You' ? 'bg-gray-50 text-black self-end' : 'bg-gray-50'
                        }`}
                      style={{ maxWidth: '70%' }}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-[#7B84E3] flex items-center">
                <input
                  type="text"
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full p-2 rounded-lg"
                  placeholder="Type your message..."
                />
                <button onClick={sendMessage} className="px-4 py-3 ml-1 bg-[#1F298D] text-white rounded-lg">
                  Send
                </button>
              </div>

            </div>
          </div>
        </div>
      </Layout >
    </>
  );
}

export default ProfileForum;
