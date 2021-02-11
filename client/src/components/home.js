import React, { Component } from 'react';
import { 
    Container, 
    ListGroup, 
    ListGroupItem, 
    Button,
    Card, 
    CardText, 
    CardBody, 
    CardLink,
    CardTitle, 
    CardSubtitle 
} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class List extends Component {

    componentDidMount() {
        this.props.getItems();
    }

    onDeleteClick = id => {
        this.props.deleteItem(id);
    }

    render () {
        const { items } = this.props.item;;
        return (
            <Container fluid className="home-page">
                <ListGroup>
                    <TransitionGroup className="list">
                        {items.map(({ _id, name, link, caption }) => (
                            <Card className="list-item">
                                <CardBody className="item-name">
                                    <CardTitle tag="h3">{name}</CardTitle>
                                </CardBody>
                                <CardBody>
                                    <img width="300px" src={link} alt="Meme" />
                                </CardBody>
                                <CardBody>
                                    <CardText tag="h4">{caption}</CardText>
                                </CardBody>
                                <CardBody>
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={this.onDeleteClick.bind(this, _id)}
                                    >Delete</Button>
                                </CardBody>
                            </Card>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

List.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
});

export default connect(mapStateToProps, { getItems, deleteItem })(List);