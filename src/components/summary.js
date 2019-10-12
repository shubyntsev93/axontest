import React, {Component} from 'react';

class Summary extends Component {   

    findKiev() {
        const users = this.props.users;
        let kievCount = users.filter(user => user.location === 'Kiev' || user.location === 'kiev').length;
        return kievCount;
    }

    getOldestAgesSum() {
        const users = this.props.users;
        users.sort((a,b) => {
            return ((new Date(a.dob).getTime() / 1000) - (new Date(b.dob).getTime() / 1000))
        });
        let sumInMs = users.reduce((sum, user, index) => {   //sum of ages in ms
            if (index < 3) {
                let birthdate = new Date(user.dob);
                let currDate = new Date();
                let age = currDate - birthdate; // age of one user in ms
                sum += age;
            }
            return sum;
        }, 0);
        let result = Math.trunc(sumInMs / 31536000000);
        return result;
    }

    getLongestName() {
        const users = this.props.users;
        let longestName = '';
        users.reduce((sum, user) => {
            let currentUserName = user.first_name + user.last_name;
            let nameLength = currentUserName.length;
            if (nameLength == sum) {        //in case when few names are longest
                longestName = `${longestName} ${user.first_name}-${user.last_name}`;
            }
            if (nameLength > sum) {
                sum = nameLength;
                longestName = `${user.first_name} ${user.last_name}`;
            }
            return sum;
        }, 0); 
        return longestName;
    }

    render() {
        return (
            <div>
                <dl>
                    <dt>Count of users from Kiev or kiev:</dt>
                    <dd>{this.findKiev()}</dd>
                    <dt>Sum of 3 oldest ages ~:</dt>
                    <dd>{this.getOldestAgesSum()}</dd>
                    <dt>Longest string of firstname+lastname:</dt>
                    <dd>{this.getLongestName()}</dd>
                </dl>
            </div>
        );
    }

}

export default Summary;
