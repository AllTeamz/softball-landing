// Mobile Analytics Tracking
(function() {
    'use strict';

    // Track scroll depth to CTA
    let scrollDepthTracked = {
        '25': false,
        '50': false,
        '75': false,
        'cta_visible': false
    };

    function trackScrollDepth() {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        
        // Track percentage milestones
        ['25', '50', '75'].forEach(function(milestone) {
            if (scrollPercent >= parseInt(milestone) && !scrollDepthTracked[milestone]) {
                scrollDepthTracked[milestone] = true;
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'scroll_depth', {
                        'event_category': 'engagement',
                        'event_label': milestone + '%',
                        'value': parseInt(milestone)
                    });
                }
            }
        });

        // Track when CTA becomes visible
        const ctaElement = document.querySelector('.appStoreLink');
        if (ctaElement && !scrollDepthTracked['cta_visible']) {
            const rect = ctaElement.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                scrollDepthTracked['cta_visible'] = true;
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'cta_visible', {
                        'event_category': 'engagement',
                        'event_label': 'App Store CTA Visible'
                    });
                }
            }
        }
    }

    // Track CTA clicks
    function trackCTAClicks() {
        // Track main App Store badge clicks
        const appStoreLinks = document.querySelectorAll('.appStoreLink, .stickyCtaButton');
        appStoreLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                const ctaType = this.classList.contains('stickyCtaButton') ? 'Sticky CTA' : 'Hero CTA';
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'cta_click', {
                        'event_category': 'conversion',
                        'event_label': ctaType,
                        'transport_type': 'beacon'
                    });
                }
            });
        });
    }

    // Track time to first CTA interaction
    let pageLoadTime = Date.now();
    let firstInteractionTracked = false;

    function trackTimeToInteraction() {
        if (firstInteractionTracked) return;
        
        const timeToInteraction = Math.round((Date.now() - pageLoadTime) / 1000);
        firstInteractionTracked = true;
        
        if (typeof gtag !== 'undefined') {
            gtag('event', 'time_to_interaction', {
                'event_category': 'engagement',
                'event_label': 'Seconds to CTA Click',
                'value': timeToInteraction
            });
        }
    }

    // Track mobile vs desktop
    function trackDeviceType() {
        const isMobile = window.innerWidth <= 768;
        if (typeof gtag !== 'undefined') {
            gtag('event', 'page_view_device', {
                'event_category': 'device',
                'event_label': isMobile ? 'Mobile' : 'Desktop',
                'device_width': window.innerWidth
            });
        }
    }

    // Initialize tracking
    document.addEventListener('DOMContentLoaded', function() {
        trackCTAClicks();
        trackDeviceType();
        
        // Add interaction tracking to CTA links
        const ctaLinks = document.querySelectorAll('.appStoreLink, .stickyCtaButton');
        ctaLinks.forEach(function(link) {
            link.addEventListener('click', trackTimeToInteraction);
        });
        
        // Track scroll depth
        let scrollTimeout;
        window.addEventListener('scroll', function() {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(trackScrollDepth, 100);
        });
        
        // Initial check
        trackScrollDepth();
    });
})();
