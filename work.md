---
title: Work | John Paul Brammer
layout: page
---

{% assign rawtags = "" %}
{% for post in site.work %}
    {% assign ttags = post.tags | join:'|' | append:'|' %}
    {% assign rawtags = rawtags | append:ttags %}
{% endfor %}
{% assign rawtags = rawtags | split:'|' | sort %}

{% assign tags = "" %}
{% for tag in rawtags %}
    {% if tag != "" %}
        {% if tags == "" %}
            {% assign tags = tag | split:'|' %}
        {% endif %}
        {% unless tags contains tag %}
            {% assign tags = tags | join:'|' | append:'|' | append:tag | split:'|' %}
        {% endunless %}
    {% endif %}
{% endfor %}

{% assign rawpublishers = "" %}
{% for post in site.work %}
    {% assign tpublishers = post.publisher | join:'|' | append:'|' %}
    {% assign rawpublishers = rawpublishers | append:tpublishers %}
{% endfor %}
{% assign rawpublishers = rawpublishers | split:'|' | sort %}

{% assign publishers = "" %}
{% for publisher in rawpublishers %}
    {% if publisher != "" %}
        {% if publishers == "" %}
            {% assign publishers = publisher | split:'|' %}
        {% endif %}
        {% unless publishers contains publisher %}
            {% assign publishers = publishers | join:'|' | append:'|' | append:publisher | split:'|' %}
        {% endunless %}
    {% endif %}
{% endfor %}


<div class="filter-container">
    <div class="row filter topic">
        <h4>Filter By Topic</h4>
        <a href="#" id="all" class="filter-buttons"> ALL </a>
        {% for tag in tags %}
            | <a href="#" id="{{ tag }}" class="filter-buttons"> {{ tag }}</a>
        {% endfor %}
    </div>
    <div class="row filter publisher">
        <h4>Filter By Publisher</h4>
        {% for publisher in publishers %}
            <a href="#" id="{{ publisher }}" class="filter-buttons"> 
                <img src="../../assets/img/{{ publisher | append: '.svg' }}" alt="{{ publisher }}">
            </a>
        {% endfor %}
    </div>    
</div>

<div class="row">
  <div class="posts">
    {% assign work = site.work | sort:"date" %}
    {% for work in site.work %}
      <a href="{{ work.url }}" class="post {{ work.tags | join: " "}} {{ work.publisher }}" style="background-image: url({{ work.image }})">
        {% if work.speaking %}
            <i class="fa fa-microphone" aria-hidden="true"></i>
        {% else %}
            <i class="fa fa-file-text" aria-hidden="true"></i>
        {% endif %}
            <div class="post-info">
                {% if work.tags %}
                <span>{% for tag in work.tags %}<p class="tags">{{ tag }}</p>{% endfor %}</span>
                {% endif %}
                <h2>{{ work.title }}</h2>
            </div>
        {% if work.publisher %}
            <div class="meta-publisher">
                <img src="/assets/img/{{ work.publisher | append: '.svg' }}" alt="{{ work.publisher }}">
            </div> 
        {% endif %}
      </a>
    {% endfor %}
  </div>    
</div>