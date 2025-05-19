import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Bell, User, LogOut, Home, Leaf, Calendar, Settings, 
  HelpCircle, ChevronDown, Search, ArrowUpRight, BarChart2, 
  ChevronLeft, ChevronRight, Plus, X, Check
} from 'lucide-react';

function KalenderPertanian() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showEventModal, setShowEventModal] = useState(false);
  
  // Notifikasi
  const [notifications, setNotifications] = useState([
    { id: 1, text: "Waktunya menyiram cabai merah!", time: "1 jam yang lalu" },
    { id: 2, text: "Padi siap untuk dipanen!", time: "3 jam yang lalu" },
    { id: 3, text: "Pemupukan jagung terjadwal besok", time: "5 jam yang lalu" }
  ]);
  
  // Data pengguna
  const userName = "Al-Mahfuzh";
  
  // State untuk kalender
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  // Data kegiatan pertanian
  const [events, setEvents] = useState([
    { id: 1, date: new Date(2025, 4, 19), title: "Menyiram cabai merah", type: "menyiram", tanaman: "Cabai Merah" },
    { id: 2, date: new Date(2025, 4, 19), title: "Memanen padi", type: "panen", tanaman: "Padi" },
    { id: 3, date: new Date(2025, 4, 20), title: "Memupuk jagung", type: "pupuk", tanaman: "Jagung" },
    { id: 4, date: new Date(2025, 4, 21), title: "Menyiram tomat", type: "menyiram", tanaman: "Tomat" },
    { id: 5, date: new Date(2025, 4, 23), title: "Memupuk cabai", type: "pupuk", tanaman: "Cabai Merah" },
    { id: 6, date: new Date(2025, 4, 24), title: "Pengecekan selada", type: "cek", tanaman: "Selada" },
    { id: 7, date: new Date(2025, 4, 26), title: "Menyiram tomat", type: "menyiram", tanaman: "Tomat" },
    { id: 8, date: new Date(2025, 4, 29), title: "Pembibitan mentimun", type: "bibit", tanaman: "Mentimun" }
  ]);
  
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: new Date(),
    type: "menyiram",
    tanaman: ""
  });
  
  // Fungsi untuk menangani logout
  const handleLogout = () => {
    console.log('Logging out...');
    navigate('/login');
  };
  
  // Fungsi untuk menandai semua notifikasi telah dibaca
  const markAllNotificationsAsRead = () => {
    setNotifications([]);
  };
  
  // Fungsi untuk mendapatkan hari dalam bulan
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };
  
  // Mendapatkan nama bulan
  const getMonthName = (date) => {
    return date.toLocaleDateString('id-ID', { month: 'long', year: 'numeric' });
  };
  
  // Fungsi untuk mendapatkan hari pertama dalam bulan (0: Minggu, 1: Senin, dst)
  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };
  
  // Handler untuk bulan berikutnya
  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };
  
  // Handler untuk bulan sebelumnya
  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };
  
  // Handler untuk menambah kegiatan baru
  const handleAddEvent = () => {
    if (newEvent.title && newEvent.tanaman) {
      setEvents([...events, {
        id: events.length + 1,
        date: selectedDate,
        title: newEvent.title,
        type: newEvent.type,
        tanaman: newEvent.tanaman
      }]);
      setNewEvent({
        title: "",
        date: new Date(),
        type: "menyiram",
        tanaman: ""
      });
      setShowEventModal(false);
    }
  };
  
  // Mendapatkan kegiatan pada tanggal tertentu
  const getEventsForDate = (date) => {
    return events.filter(event => 
      event.date.getDate() === date.getDate() && 
      event.date.getMonth() === date.getMonth() && 
      event.date.getFullYear() === date.getFullYear()
    );
  };
  
  // Memeriksa apakah tanggal memiliki kegiatan
  const hasEvents = (date) => {
    return getEventsForDate(date).length > 0;
  };
  
  // Mendapatkan warna untuk jenis kegiatan
  const getEventTypeColor = (type) => {
    switch (type) {
      case "menyiram":
        return "bg-blue-500";
      case "panen":
        return "bg-yellow-500";
      case "pupuk":
        return "bg-green-500";
      case "bibit":
        return "bg-purple-500";
      case "cek":
        return "bg-gray-500";
      default:
        return "bg-gray-300";
    }
  };
  
  // Render kalender
  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);
    
    const days = [];
    const dayNames = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
    
    // Render nama hari
    const dayNameCells = dayNames.map((name, index) => (
      <div key={`dayName-${index}`} className="text-center py-2 text-sm font-semibold text-gray-600">
        {name}
      </div>
    ));
    
    // Padding untuk hari-hari sebelum hari pertama bulan
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(
        <div key={`empty-${i}`} className="text-center py-4"></div>
      );
    }
    
    // Render tanggal
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isSelected = selectedDate && 
                         date.getDate() === selectedDate.getDate() && 
                         date.getMonth() === selectedDate.getMonth() && 
                         date.getFullYear() === selectedDate.getFullYear();
      const isToday = new Date().getDate() === day && 
                     new Date().getMonth() === month && 
                     new Date().getFullYear() === year;
      
      const dayEvents = getEventsForDate(date);
      
      days.push(
        <div 
          key={`day-${day}`} 
          onClick={() => {
            setSelectedDate(date);
          }}
          className={`relative text-center py-2 cursor-pointer ${
            isSelected ? 'bg-green-100' : hasEvents(date) ? 'bg-gray-50' : ''
          } hover:bg-green-50`}
        >
          <div className={`inline-flex items-center justify-center w-8 h-8 ${
            isToday ? 'bg-green-500 text-white rounded-full' : isSelected ? 'border-2 border-green-500 rounded-full' : ''
          }`}>
            {day}
          </div>
          
          {dayEvents.length > 0 && (
            <div className="absolute bottom-1 left-0 right-0 flex justify-center space-x-1">
              {dayEvents.slice(0, 3).map((event, idx) => (
                <div 
                  key={`event-dot-${event.id}-${idx}`} 
                  className={`w-2 h-2 rounded-full ${getEventTypeColor(event.type)}`}
                ></div>
              ))}
              {dayEvents.length > 3 && <div className="w-2 h-2 rounded-full bg-gray-400"></div>}
            </div>
          )}
        </div>
      );
    }
    
    return [...dayNameCells, ...days];
  };
  
  // Tanggal dalam format Indonesia
  const formattedSelectedDate = selectedDate.toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <div className="bg-white shadow-md py-3 px-6 flex justify-between items-center sticky top-0 z-10">
        {/* Logo Section */}
        <div className="flex items-center">
          <div className="font-bold text-2xl text-green-700">AGROREMIND</div>
        </div>
        
        {/* Search Bar */}
        <div className="flex-1 flex justify-center px-4">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search size={16} className="text-gray-400" />
            </div>
            <input 
              type="text" 
              className="bg-gray-100 border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full pl-10 p-2" 
              placeholder="Cari kegiatan..."
            />
          </div>
        </div>
        
        {/* Right Side Menu */}
        <div className="flex items-center space-x-5">
          {/* Notifikasi */}
          <div className="relative">
            <button 
              className="p-2 rounded-full hover:bg-gray-100 relative"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <Bell size={20} className="text-gray-700" />
              {notifications.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {notifications.length}
                </span>
              )}
            </button>
            
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg py-1 z-20">
                <div className="px-4 py-2 border-b border-gray-100 flex justify-between items-center">
                  <h3 className="font-semibold">Notifikasi</h3>
                  <button 
                    className="text-xs text-gray-500 hover:text-gray-700"
                    onClick={markAllNotificationsAsRead}
                  >
                    Tandai semua telah dibaca
                  </button>
                </div>
                {notifications.length > 0 ? (
                  notifications.map(notification => (
                    <div key={notification.id} className="px-4 py-3 hover:bg-gray-50 border-b border-gray-100">
                      <p className="text-sm">{notification.text}</p>
                      <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-3 text-sm text-gray-500">
                    Tidak ada notifikasi
                  </div>
                )}
                <div className="px-4 py-2">
                  <button className="text-sm text-green-600 hover:text-green-800">
                    Lihat semua notifikasi
                  </button>
                </div>
              </div>
            )}
          </div>
          
          {/* Help */}
          <button className="p-2 rounded-full hover:bg-gray-100">
            <HelpCircle size={20} className="text-gray-700" />
          </button>
          
          {/* Settings */}
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Settings size={20} className="text-gray-700" />
          </button>
          
          {/* Profil */}
          <div className="relative ml-2">
            <button 
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setShowMenu(!showMenu)}
            >
              <img
                src="/api/placeholder/40/40"
                alt=":*:"
                className="h-8 w-8 rounded-full object-cover border-2 border-green-500"
              />
              <div className="flex items-center">
                <span className="text-sm font-medium mr-1">{userName}</span>
                <ChevronDown size={16} className="text-gray-500" />
              </div>
            </button>
            
            {showMenu && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-20">
                <div className="px-4 py-3 border-b border-gray-100">
                  <p className="text-sm font-semibold">{userName}</p>
                  <p className="text-xs text-gray-500">petani@example.com</p>
                </div>
                <button className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                  <User size={16} className="mr-2" />
                  Profil Saya
                </button>
                <button className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                  <Settings size={16} className="mr-2" />
                  Pengaturan
                </button>
                <div className="border-t border-gray-100 my-1"></div>
                <button onClick={handleLogout} className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left">
                  <LogOut size={16} className="mr-2" />
                  Keluar
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Main Content Area */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-sm p-4 min-h-screen">
          <div className="flex flex-col space-y-1">
            <button onClick={() => navigate('/dashboard')} className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-50 text-gray-700">
              <Home size={18} />
              <span>Beranda</span>
            </button>
            <button onClick={() => navigate('/lihat')} className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-50 text-gray-700">
              <Leaf size={18} />
              <span>Tanaman Saya</span>
            </button>
            <button onClick={() => navigate('/kalender')} className="flex items-center space-x-2 p-3 rounded-md bg-green-100 text-green-700">
              <Calendar size={18} />
              <span>Kalender Pertanian</span>
            </button>
            <button onClick={() => navigate('/statistik')} className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-50 text-gray-700">
              <BarChart2 size={18} />
              <span>Statistik</span>
            </button>
            
            <div className="border-t border-gray-200 my-2 pt-2">
              <h3 className="px-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Bantuan & Dukungan</h3>
            </div>
            
            <button onClick={() => navigate('/panduan')} className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-50 text-gray-700">
              <HelpCircle size={18} />
              <span>Panduan Pengguna</span>
            </button>
            <button onClick={() => navigate('/pengaturan')} className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-50 text-gray-700">
              <Settings size={18} />
              <span>Pengaturan</span>
            </button>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Kalender Pertanian</h1>
            <p className="text-gray-600">Kelola jadwal kegiatan pertanian Anda</p>
          </div>
          
          <div className="grid grid-cols-12 gap-6">
            {/* Kalender */}
            <div className="col-span-12 lg:col-span-8">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
                <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <button onClick={handlePrevMonth} className="p-2 rounded-full hover:bg-gray-100">
                      <ChevronLeft size={20} className="text-gray-600" />
                    </button>
                    <h2 className="font-semibold text-lg">{getMonthName(currentDate)}</h2>
                    <button onClick={handleNextMonth} className="p-2 rounded-full hover:bg-gray-100">
                      <ChevronRight size={20} className="text-gray-600" />
                    </button>
                  </div>
                  <button 
                    onClick={() => {
                      setSelectedDate(new Date());
                      setShowEventModal(true);
                    }}
                    className="flex items-center space-x-1 px-3 py-1.5 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                  >
                    <Plus size={16} />
                    <span>Tambah Kegiatan</span>
                  </button>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-7 gap-1">
                    {renderCalendar()}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Detail Kegiatan */}
            <div className="col-span-12 lg:col-span-4">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
                <div className="p-4 border-b border-gray-200">
                  <h2 className="font-semibold text-lg">Kegiatan - {formattedSelectedDate}</h2>
                </div>
                <div className="p-4">
                  {getEventsForDate(selectedDate).length > 0 ? (
                    <div className="space-y-3">
                      {getEventsForDate(selectedDate).map(event => (
                        <div key={event.id} className="flex items-start p-3 border border-gray-100 rounded-lg hover:bg-gray-50">
                          <div className={`w-3 h-3 rounded-full mt-1.5 mr-3 ${getEventTypeColor(event.type)}`}></div>
                          <div className="flex-1">
                            <h3 className="font-medium text-gray-800">{event.title}</h3>
                            <p className="text-sm text-gray-600">{event.tanaman}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-6 text-gray-500">
                      <p>Tidak ada kegiatan untuk tanggal ini</p>
                      <button 
                        onClick={() => setShowEventModal(true)}
                        className="mt-2 text-green-600 hover:text-green-800 font-medium"
                      >
                        + Tambah Kegiatan
                      </button>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Legenda */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-4 border-b border-gray-200">
                  <h2 className="font-semibold text-lg">Legenda</h2>
                </div>
                <div className="p-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <span className="text-sm">Menyiram</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="text-sm">Pemupukan</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <span className="text-sm">Panen</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                      <span className="text-sm">Pembibitan</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-gray-500"></div>
                      <span className="text-sm">Pengecekan</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Modal Tambah Kegiatan */}
      {showEventModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="font-semibold text-lg">Tambah Kegiatan Baru</h2>
              <button 
                onClick={() => setShowEventModal(false)}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <X size={20} className="text-gray-500" />
              </button>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Judul Kegiatan</label>
                  <input 
                    type="text" 
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-green-200 focus:border-green-500"
                    placeholder="Contoh: Menyiram cabai"
                    value={newEvent.title}
                    onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tanaman</label>
                  <input 
                    type="text" 
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-green-200 focus:border-green-500"
                    placeholder="Contoh: Cabai Merah"
                    value={newEvent.tanaman}
                    onChange={(e) => setNewEvent({...newEvent, tanaman: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal</label>
                  <div className="text-sm bg-gray-100 p-2 rounded-md">
                    {formattedSelectedDate}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Jenis Kegiatan</label>
                  <select 
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-green-200 focus:border-green-500"
                    value={newEvent.type}
                    onChange={(e) => setNewEvent({...newEvent, type: e.target.value})}
                  >
                    <option value="menyiram">Menyiram</option>
                    <option value="pupuk">Pemupukan</option>
                    <option value="panen">Panen</option>
                    <option value="bibit">Pembibitan</option>
                    <option value="cek">Pengecekan</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-gray-200 flex justify-end space-x-2">
              <button 
                onClick={() => setShowEventModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Batal
              </button>
              <button 
                onClick={handleAddEvent}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center"
              >
                <Check size={16} className="mr-1" />
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default KalenderPertanian;