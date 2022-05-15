export const contacts = [
  {
    name: 'علیرضا',
    avatar: 'http://localhost/img/Profile.svg',
    lastSeen: '5 second ago'
  },
  {
    name: 'آرش اصغری',
    avatar: 'http://localhost/img/Profile.svg',
    lastSeen: '1 houre ago'
  },
  {
    name: 'سارا',
    avatar: 'http://localhost/img/Sara.svg',
    lastSeen: '5 min ago'
  },
  {
    name: 'شیما',
    avatar: 'http://localhost/img/Shima.svg',
    lastSeen: '10 houre ago'
  },
  {
    name: 'استاد نبوی',
    avatar: 'http://localhost/img/Shima.svg',
    lastSeen: '1 houre ago'
  },
  {
    name: 'بابک جهانی',
    avatar: 'http://localhost/img/Babak-jahani.svg',
    lastSeen: '21 min ago'
  }
]

export const chatList = [
  {
    id: '1',
    type: 'pv',
    name: 'علیرضا',
    status: '...این متن بصورت آزمایشی در این محل قرار دارد',
    avatar: 'http://localhost/img/Profile.svg',
    lastSeen: '5 second ago',
    messages: [
      {
        typeContent: 'image',
        file_name: 'عکس',
        img: 'http://localhost/img/Men.svg',
        loadImg: 'http://localhost/img/Men-2.svg',
        file_size: '45.5MB',
        file_format: 'svg',
        senderId: 10,
        date: 'saturday, 18th',
        time: '5:01'
      }
    ],
    meMessages: [
      {
        typeContent: 'text',
        text: 'امتحان کی برگزار میشه؟',
        senderId: 'me',
        date: 'saturday, 18th',
        time: '7:01'
      }
    ]

  },
  {
    id: '2',
    type: 'gp',
    name: 'معارف اسلامی',
    nameGroup: 'معارف اسلامی',
    status: 'دکتر ناصر انسانی',
    avatar: 'http://localhost/img/Naser-alsaghi.svg',
    lastSeen: '1 houre ago',
    messages: [
      {
        id: 3,
        typeContent: 'audio',
        file_name: 'audio',
        file_size: '1.02MB',
        file_time: '01:00',
        file_format: 'Audio',
        senderId: 12,
        date: 'friday, 29th',
        time: '00:01',
        name: 'سارا',
        avatar: 'http://localhost/img/Sara.svg'
      },
      {
        id: 5,
        typeContent: 'text',
        text: 'جزوه معادلات من دست کیه؟',
        senderId: 12,
        date: 'friday, 29th',
        time: '21:10',
        name: 'بابک جهانی',
        avatar: 'http://localhost/img/Babak-jahani.svg'
      },
      {
        id: 6,
        typeContent: 'music',
        file_name: 'Dio alone',
        singer_name: 'Hamed pahlan',
        file_size: '2.50MB',
        file_time: '03:23',
        file_format: 'music',
        senderId: 12,
        date: 'friday, 29th',
        time: '14:27',
        name: 'مبینا',
        avatar: 'http://localhost/img/Sara.svg'
      },
      {
        typeContent: 'text',
        text: 'من فردا برات جزوه رو میارم؟',
        senderId: 12,
        date: 'friday, 29th',
        time: '21:10',
        name: 'علیرضافخیم',
        avatar: 'http://localhost/img/Profile.svg'
      }
    ],
    meMessages: [
      {
        typeContent: 'music',
        file_name: 'Dio alone',
        singer_name: 'Hamed pahlan',
        file_size: '2.50MB',
        file_time: '03:23',
        file_format: 'music',
        senderId: 12,
        date: 'friday, 29th',
        time: '14:27'
      }
    ]
  },
  {
    id: '3',
    type: 'pv',
    name: 'سارا',
    status: '...این متن بصورت آزمایشی در این محل قرار دارد',
    avatar: 'http://localhost/img/Sara.svg',
    lastSeen: '5 min ago',
    messages: [
      {
        typeContent: 'text',
        text: 'امتحان کی برگزار میشه؟',
        senderId: 'me',
        date: 'saturday, 18th',
        time: '7:01'
      }
    ],
    meMessages: [
      {
        typeContent: 'audio',
        file_name: 'audio',
        file_size: '0.50MB',
        file_time: '01:00',
        file_format: 'Audio',
        senderId: 12,
        date: 'friday, 29th',
        time: '00:01'
      }
    ]
  },
  {
    id: '4',
    type: 'gp',
    name: 'استاتیک',
    nameGroup: 'استاتیک',
    status: 'سروناز سالاری',
    avatar: 'http://localhost/img/Profile-group.svg',
    lastSeen: '1 second ago',
    messages: [
      {
        typeContent: 'image',
        file_name: 'عکس',
        img: 'http://localhost/img/Men.svg',
        loadImg: 'http://localhost/img/Men-2.svg',
        file_size: '45.5MB',
        file_format: 'svg',
        senderId: 10,
        date: 'saturday, 18th',
        time: '5:01',
        name: 'علیرضا',
        avatar: 'http://localhost/img/Profile.svg'
      },
      {
        typeContent: 'audio',
        file_name: 'audio',
        file_size: '0.50MB',
        file_time: '01:00',
        file_format: 'Audio',
        senderId: 12,
        date: 'friday, 29th',
        time: '00:01',
        name: 'سارا',
        avatar: 'http://localhost/img/Sara.svg'
      }
    ],
    meMessages: [
      {
        typeContent: 'audio',
        file_name: 'audio',
        file_size: '1.02MB',
        file_time: '01:00',
        file_format: 'Audio',
        senderId: 'me',
        date: 'saturday, 18th',
        time: '7:01'
      }
    ]
  },
  {
    id: '5',
    type: 'pv',
    name: 'شیما',
    status: '...این متن بصورت آزمایشی در این محل قرار دارد',
    avatar: 'http://localhost/img/Shima.svg',
    lastSeen: '10 houre ago',
    messages: [
      {
        id: 6,
        typeContent: 'music',
        file_name: 'enrique',
        singer_name: 'pendejo',
        file_size: '2.30MB',
        file_time: '03:33',
        file_format: 'music',
        senderId: 12,
        date: 'friday, 29th',
        time: '14:27'
      }
    ],
    meMessages: [
      {
        typeContent: 'text',
        text: 'امتحان کی برگزار میشه؟',
        senderId: 'me',
        date: 'saturday, 18th',
        time: '12:21'
      }
    ]
  },
  {
    id: '6',
    type: 'gp',
    name: 'مکانیک سیالات',
    nameGroup: 'مکانیک سیالات',
    status: 'دکتر همایون احمدی',
    avatar: 'http://localhost/img/Homayon-ahmadi.svg',
    lastSeen: '30 min ago',
    messages: [
      {
        typeContent: 'music',
        file_name: 'Dio alone',
        singer_name: 'jack',
        file_size: '2.50MB',
        file_time: '02:00',
        file_format: 'music',
        senderId: 12,
        date: 'friday, 29th',
        time: '10:27',
        name: 'تینا',
        avatar: 'http://localhost/img/Sara.svg'
      }
    ],
    meMessages: [
      {
        typeContent: 'image',
        file_name: 'عکس',
        img: 'http://localhost/img/Men.svg',
        loadImg: 'http://localhost/img/Men-2.svg',
        file_size: '15.00MB',
        file_format: 'svg',
        senderId: 'me',
        date: 'saturday, 18th',
        time: '7:01'
      }
    ]

  },
  {
    id: '7',
    type: 'gp',
    nameGroup: 'ریاضیات مهندسی',
    name: 'ریاضیات مهندسی',
    status: 'دکتر ناصر الساقی',
    avatar: 'http://localhost/img/Profile-group.svg',
    lastSeen: '10 min ago',
    messages: [
      {
        typeContent: 'music',
        file_name: 'Dio alone',
        singer_name: 'Hamed pahlan',
        file_size: '2.50MB',
        file_time: '03:23',
        file_format: 'music',
        senderId: 12,
        date: 'friday, 29th',
        time: '14:27',
        name: 'مبینا',
        avatar: 'http://localhost/img/Sara.svg'
      },
      {
        typeContent: 'video',
        file_name: 'فصل 8 ریاضیات',
        file_url: 'http://localhost/img/Men.svg',
        file_size: '50.5MB',
        file_format: 'svg',
        senderId: 10,
        date: 'saturday, 18th',
        time: '00:01',
        name: 'استاد نبوی',
        avatar: 'http://localhost/img/Profile.svg'
      }
    ],
    meMessages: [
      {
        typeContent: 'text',
        text: 'امتحان کی برگزار میشه؟',
        senderId: 'me',
        date: 'saturday, 18th',
        time: '7:01'
      }
    ]
  },
  {
    id: '8',
    type: 'pv',
    name: 'بابک جهانی',
    status: '...این متن بصورت آزمایشی در این محل قرار دارد',
    avatar: 'http://localhost/img/Babak-jahani.svg',
    lastSeen: '1 houre ago',
    messages: [
      {
        typeContent: 'text',
        text: 'سلام رضا جون چطوری؟',
        senderId: 'me',
        date: 'saturday, 18th',
        time: '7:01'
      }
    ],
    meMessages: [
      {
        typeContent: 'text',
        text: 'به به توکریم داداش',
        senderId: 'me',
        date: 'saturday, 18th',
        time: '7:02'
      },
      {
        typeContent: 'text',
        text: 'من عالی شما خوبی داداش؟',
        senderId: 'me',
        date: 'saturday, 18th',
        time: '7:02'
      },
      {
        typeContent: 'video',
        file_name: 'فصل 8 ریاضیات',
        file_url: 'http://localhost/img/Men.svg',
        file_size: '50.5MB',
        file_format: 'svg',
        date: 'saturday, 18th',
        time: '02:01'
      }
    ]

  }
]

export const shareMedia = []
