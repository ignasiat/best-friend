import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dogs = [{
    name: 'Balto',
    shelter: {
      name: 'Eloise Rescue',
      photoURL: 'https://previews.123rf.com/images/artsterdam/artsterdam1904/artsterdam190400007/122375530-pets-care-man-and-dog-logo-design-animal-pet-shelter-and-clinic-vector-design-and-illustration.jpg'
    },
    address: {
      city: 'Los Angeles'
    },
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur sequi illum quod quia. Reprehenderit, aperiam voluptatibus. Eos quasi animi reiciendis laborum qui porro natus dignissimos, deserunt alias minima modi in.',
    photoURL: 'https://www.shbarcelona.com/blog/en/wp-content/uploads/2016/07/meetups-for-dogs-in-Barcelona.jpg'
  },
  {
    name: 'Balto',
    shelter: {
      name: 'Eloise Rescue',
      photoURL: 'https://previews.123rf.com/images/artsterdam/artsterdam1904/artsterdam190400007/122375530-pets-care-man-and-dog-logo-design-animal-pet-shelter-and-clinic-vector-design-and-illustration.jpg'
    },
    address: {
      city: 'Los Angeles'
    },
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur sequi illum quod quia. Reprehenderit, aperiam voluptatibus. Eos quasi animi reiciendis laborum qui porro natus dignissimos, deserunt alias minima modi in.',
    photoURL: 'https://www.shbarcelona.com/blog/en/wp-content/uploads/2016/07/meetups-for-dogs-in-Barcelona.jpg'
  },
  {
    name: 'Balto',
    shelter: {
      name: 'Eloise Rescue',
      photoURL: 'https://previews.123rf.com/images/artsterdam/artsterdam1904/artsterdam190400007/122375530-pets-care-man-and-dog-logo-design-animal-pet-shelter-and-clinic-vector-design-and-illustration.jpg'
    },
    address: {
      city: 'Los Angeles'
    },
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur sequi illum quod quia. Reprehenderit, aperiam voluptatibus. Eos quasi animi reiciendis laborum qui porro natus dignissimos, deserunt alias minima modi in.',
    photoURL: 'https://www.shbarcelona.com/blog/en/wp-content/uploads/2016/07/meetups-for-dogs-in-Barcelona.jpg'
  },
  {
    name: 'Balto',
    shelter: {
      name: 'Eloise Rescue',
      photoURL: 'https://previews.123rf.com/images/artsterdam/artsterdam1904/artsterdam190400007/122375530-pets-care-man-and-dog-logo-design-animal-pet-shelter-and-clinic-vector-design-and-illustration.jpg'
    },
    address: {
      city: 'Los Angeles'
    },
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur sequi illum quod quia. Reprehenderit, aperiam voluptatibus. Eos quasi animi reiciendis laborum qui porro natus dignissimos, deserunt alias minima modi in.',
    photoURL: 'https://www.shbarcelona.com/blog/en/wp-content/uploads/2016/07/meetups-for-dogs-in-Barcelona.jpg'
  }, {
    name: 'Balto',
    shelter: {
      name: 'Eloise Rescue',
      photoURL: 'https://previews.123rf.com/images/artsterdam/artsterdam1904/artsterdam190400007/122375530-pets-care-man-and-dog-logo-design-animal-pet-shelter-and-clinic-vector-design-and-illustration.jpg'
    },
    address: {
      city: 'Los Angeles'
    },
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur sequi illum quod quia. Reprehenderit, aperiam voluptatibus. Eos quasi animi reiciendis laborum qui porro natus dignissimos, deserunt alias minima modi in.',
    photoURL: 'https://www.shbarcelona.com/blog/en/wp-content/uploads/2016/07/meetups-for-dogs-in-Barcelona.jpg'
  }, {
    name: 'Balto',
    shelter: {
      name: 'Eloise Rescue',
      photoURL: 'https://previews.123rf.com/images/artsterdam/artsterdam1904/artsterdam190400007/122375530-pets-care-man-and-dog-logo-design-animal-pet-shelter-and-clinic-vector-design-and-illustration.jpg'
    },
    address: {
      city: 'Los Angeles'
    },
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur sequi illum quod quia. Reprehenderit, aperiam voluptatibus. Eos quasi animi reiciendis laborum qui porro natus dignissimos, deserunt alias minima modi in.',
    photoURL: 'https://www.shbarcelona.com/blog/en/wp-content/uploads/2016/07/meetups-for-dogs-in-Barcelona.jpg'
  }
  ]

  ngOnInit (): void {
  }
}
