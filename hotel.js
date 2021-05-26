/**
 *Version 1
Create an index.html and hotel.js file.  Connect the files via a script tag.


Create all HTML elements and tags from within hotel.js


allow rooms to be booked by floor number, room number or room type


allow rooms to be returned/checked out by room number only.
Also create a checkout all rooms
*/



const javaScriptHotel = {
    roomTypes: ["Single", "Double", "Suite"],
    availableRoomNumbers: [[1000, 1001, 1002, 1003], [2000, 2001], [3000]],
    bookedRooms: [[], [], []],
    costOfRooms: [100, 200, 500],
    bookAvailableRooms: function () {
        for (let i = 0; i < this.availableRoomNumbers.length; i++) {
            for (let j = 0; j < this.availableRoomNumbers[i].length; j++) {
                this.bookedRooms[i].push(this.availableRoomNumbers[i].shift())
                // console.log(this.bookedRooms);
                return;
            }
        }
    },
    bookRoomsByFloor: function (floorNum) {

        floorNum -= 1
        // console.log("check floor num: ", floorNum);
        if (this.availableRoomNumbers[floorNum].length > 0) {
            this.bookedRooms[floorNum].push(this.availableRoomNumbers[floorNum].shift())
            // console.log(this.bookedRooms);
        }

    },
    bookByRoomNum: function (roomNum) {
        for (let i = 0; i < this.availableRoomNumbers.length; i++) {
            for (let j = 0; j < this.availableRoomNumbers[i].length; j++) {
                if (roomNum == this.availableRoomNumbers[i][j]) {
                    this.bookedRooms[i].push(this.availableRoomNumbers[i][j])
                    this.availableRoomNumbers[i].splice(j, 1)

                    // console.log(this.bookedRooms, "testing")
                    return;
                }
            }
        }
    },

    bookRoomByType: function (roomType) {
        let index;

        if (roomType === "Single") {
            index = 0

        } else if (roomType === "Double") {
            index = 1

        } else if (roomType === "Suite") {
            index = 2

        }
        // console.log("check floortype: ", index);
        if (this.availableRoomNumbers[index].length > 0) {
            this.bookedRooms[index].push(this.availableRoomNumbers[index].shift())
            // console.log(this.bookedRooms);
        }

    },

    checkOutRoom: function (roomNum) {
        for (let i = 0; i < this.bookedRooms.length; i++) {
            for (let j = 0; j < this.bookedRooms[i].length; j++) {
                if (roomNum == this.bookedRooms[i][j]) {
                    this.availableRoomNumbers[i].push(this.bookedRooms[i][j])
                    this.bookedRooms[i].splice(j, 1)

                    // console.log(this.availableRoomNumbers, "testing")
                    return;
                }
            }
        }
    },

    checkOutAllRooms: function () {
        for (let i = 0; i < this.bookedRooms.length; i++) {
            for (let j = 0; j < this.bookedRooms[i].length; j++) {
                if (this.bookedRooms[i].length > 0) {

                    this.availableRoomNumbers[i].push(this.bookedRooms[i][j])
                    this.bookedRooms[i].splice(j, 1)

                    j--
                }
            }
        }
        console.log(this.availableRoomNumbers, "available rooms")
        console.log(this.bookedRooms, "booked rooms");
    }

}

javaScriptHotel.bookAvailableRooms();
javaScriptHotel.bookRoomsByFloor(2);
javaScriptHotel.bookByRoomNum(2001);
javaScriptHotel.bookRoomByType("Suite");
javaScriptHotel.checkOutRoom(2001);
javaScriptHotel.checkOutAllRooms();
